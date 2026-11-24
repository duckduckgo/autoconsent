// specIds: data files in tests/sites (see scripts/get-tests-to-run.js), run through tests/rule-sites.spec.ts
def runPlaywrightTests(resultDir, browser, specIds) {
    def junitFile = "results-${env.REGION}.xml"
    try {
        timeout(120) {
            def specsArg = specIds.join(',')
            sh """
                SPECS='${specsArg}' PLAYWRIGHT_JUNIT_OUTPUT_NAME=${junitFile} npx playwright test tests/rule-sites.spec.ts --project ${browser} --workers 10 --reporter=junit,line || true
            """
        }
    } finally {
        def summary = junit skipMarkingBuildUnstable: true, skipPublishingChecks: true, allowEmptyResults: true, testResults: junitFile
        archiveArtifacts artifacts: "test-results/screenshots/**/*.jpg", fingerprint: true, allowEmptyArchive: true
        archiveArtifacts artifacts: junitFile, fingerprint: true, allowEmptyArchive: true
        return summary
    }
}

// Rerun the tests that the local pass listed as blocked by a bot wall, one Oxylabs session at a time.
def runOxylabsTests(candidatesFile, specIds) {
    def junitFile = "results-${env.REGION}-oxylabs.xml"
    try {
        // Playwright's --global-timeout ends the run first, so it still writes the JUnit XML
        timeout(60) {
            def specsArg = specIds.join(',')
            withCredentials([usernamePassword(credentialsId: 'autoconsent-oxylabs', usernameVariable: 'OXYLABS_USER', passwordVariable: 'OXYLABS_PASSWORD')]) {
                sh """
                    SPECS='${specsArg}' OXYLABS=1 OXYLABS_CANDIDATES=${candidatesFile} PLAYWRIGHT_JUNIT_OUTPUT_NAME=${junitFile} npx playwright test tests/rule-sites.spec.ts --project chrome --workers 1 --retries 1 --global-timeout 3300000 --reporter=junit,line || true
                """
            }
        }
    } catch (e) {
        // e.g. missing credentials: keep the local results instead of failing the build
        echo "Oxylabs pass failed: ${e}"
    } finally {
        def summary = junit skipMarkingBuildUnstable: true, skipPublishingChecks: true, allowEmptyResults: true, testResults: junitFile
        archiveArtifacts artifacts: "test-results/screenshots/oxylabs/**/*.jpg", fingerprint: true, allowEmptyArchive: true
        archiveArtifacts artifacts: junitFile, fingerprint: true, allowEmptyArchive: true
        return summary
    }
}

def withEnvFile(envfile, Closure cb) {
    def props = readProperties(file: envfile)
    withEnv(props.collect{ entry -> "${entry.key}=${entry.value}" }) {
        cb()
    }
}

// Diff against the merge base, so files merged to the target branch after Jenkins built the PR merge commit do not count as modified.
def getModifiedFiles() {
    if (env.CHANGE_ID) {
        def changedFiles = sh(script: "git diff --name-only origin/${env.CHANGE_TARGET}...HEAD", returnStdout: true).trim()
        return changedFiles.split("\n")
    } else {
        return []
    }
}

def getTestsToRun(modifiedFiles) {
    def filesArg = modifiedFiles.findAll { it }.join(' ')
    if (!filesArg) {
        return []
    }
    def result = sh(
        script: "node scripts/get-tests-to-run.js ${filesArg}",
        returnStdout: true,
    ).trim()
    return result ? result.split("\n").collect { it.trim() }.findAll { it } : []
}

pipeline {
    agent { label 'autoconsent-crawler-noble' }
    parameters {
        string(name: 'TEST_RESULT_ROOT', defaultValue: '/mnt/efs/users/smacbeth/autoconsent/ci', description: 'Where test results and configuration are stored')
        choice(name: 'BROWSER', choices: ['chrome', 'webkit', 'iphoneSE', 'firefox'], description: 'Browser')
        string(name: 'BRANCH', defaultValue: 'main', description: 'Branch or PR to checkout (e.g. pr/123)')
    }
    stages {
        stage('Checkout') {
            when {
                expression {
                    // skip the BRANCH variable if this is running in a multibranch job
                    return env.BRANCH_NAME == null
                }
            }
            steps {
                checkout([$class: 'GitSCM', branches: [[name: "${params.BRANCH}"]],
                    extensions: [[$class: 'LocalBranch']],
                    userRemoteConfigs: [[refspec: "+refs/pull/*/head:refs/remotes/origin/pr/*", credentialsId: 'autoconsent-rw', url: 'https://github.com/duckduckgo/autoconsent.git']]])
            }
        }

        stage('Prepare Node') {
            steps {
                sh "fnm install"
                script {
                    def nodeBin = sh(returnStdout: true, script: "fnm exec -- node -e 'console.log(require(\"path\").dirname(process.execPath))'").trim()
                    env.PATH = "${nodeBin}:${env.PATH}"
                }
            }
        }

        stage('Build') {
            steps {
                sh '''
                npm ci
                npx playwright install
                '''
                script {
                    if (env.BRANCH_NAME == null) {
                        currentBuild.description = "${params.BRANCH} - ${params.BROWSER}"
                    } else {
                        currentBuild.description = "${env.GIT_COMMIT}"
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    def testsFailed = 0
                    def testsTotal = 0

                    def modifiedFiles = getModifiedFiles()
                    echo "Modified files: ${modifiedFiles.join(', ')}"

                    def testsToRun = getTestsToRun(modifiedFiles)
                    echo "Tests to run: ${testsToRun.join(', ')}"

                    if (testsToRun.isEmpty()) {
                        echo "No tests to run for this change"
                    } else {
                        def regions = ['us', 'gb', 'au', 'ca', 'de', 'fr', 'nl', 'ch', 'no']
                        // Skip optIn tests, and run each spec in at most 3 of these regions, seeded by the PR number (see playwright/runner.ts)
                        def ciEnv = ["SKIP_OPT_IN=1", "CI_REGIONS=${regions.join(',').toUpperCase()}", "CI_SEED=${env.CHANGE_ID ?: env.BUILD_NUMBER}"]
                        withEnv(ciEnv) {
                            for (region in regions) {
                                withEnvFile("${params.TEST_RESULT_ROOT}/${region}.env") {
                                    def candidatesFile = "${env.WORKSPACE}/oxylabs-candidates-${env.REGION}.txt"
                                    sh "rm -f '${candidatesFile}'"
                                    def summary
                                    withEnv(["OXYLABS_CANDIDATES=${candidatesFile}"]) {
                                        summary = runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, testsToRun)
                                    }
                                    testsFailed += summary.failCount
                                    testsTotal += summary.totalCount
                                    // Oxylabs browsers are Chromium only
                                    if (params.BROWSER == 'chrome' && fileExists(candidatesFile)) {
                                        def oxylabsSummary = runOxylabsTests(candidatesFile, testsToRun)
                                        // a test that passes on Oxylabs no longer counts as failed
                                        testsFailed -= oxylabsSummary.passCount
                                    }
                                }
                            }
                        }
                    }

                    def status = 'SUCCESS'
                    def description = "No tests to run"

                    if (testsTotal > 0) {
                        description = "${testsFailed}/${testsTotal} failed"
                        if (testsFailed > 0) {
                            status = 'FAILURE'
                        }
                        if (env.CHANGE_ID) {
                            def artifactsUrl = "${env.BUILD_URL}artifact/*zip*/archive.zip"
                            withCredentials([string(credentialsId: 'github.com-autoconsent-PAT', variable: 'GH_TOKEN')]) {
                                sh "curl -L -X POST -H 'Authorization: Bearer ${GH_TOKEN}' -H 'Accept: application/vnd.github+json' -H 'X-GitHub-Api-Version: 2022-11-28' https://api.github.com/repos/duckduckgo/autoconsent/issues/${env.CHANGE_ID}/comments -d '{\"body\":\"CI run finished. Artifacts [ZIP](${artifactsUrl}) for the [review tool](https://zok.pw/autoconsent-review-tool/)\"}' || true"
                            }
                        }
                    }

                    // Apply the status to the PR head commit. Jenkins merges the target branch into the PR head, so HEAD^1 is the PR head
                    // when that made a merge commit. When the PR is already up to date with the target branch, there is no merge and HEAD is the PR head.
                    def prCommitSha = sh(script: "if git rev-parse -q --verify HEAD^2 >/dev/null; then git rev-parse HEAD^1; else git rev-parse HEAD; fi", returnStdout: true).trim()
                    githubNotify(
                        account: 'duckduckgo',
                        repo: 'autoconsent',
                        context: 'Tests / Changed files',
                        sha: "${prCommitSha}",
                        description: description,
                        status: status,
                        credentialsId: 'autoconsent-rw'
                    )
                }
            }
        }
    }
}
