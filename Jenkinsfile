def runPlaywrightTests(resultDir, browser, testFiles) {
    def junitFile = "results-${env.REGION}.xml"
    try {
        timeout(120) {
            def testFilesArg = testFiles.join(' ')
            sh """
                PLAYWRIGHT_JUNIT_OUTPUT_NAME=${junitFile} npx playwright test ${testFilesArg} --project ${browser} --workers 10 --reporter=junit,line || true
            """
        }
    } finally {
        def summary = junit skipMarkingBuildUnstable: true, skipPublishingChecks: true, allowEmptyResults: true, testResults: junitFile
        archiveArtifacts artifacts: "test-results/screenshots/**/*.jpg", fingerprint: true, allowEmptyArchive: true
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

def getModifiedFiles() {
    if (env.CHANGE_ID) {
        def changedFiles = sh(script: "git diff --name-only origin/${env.CHANGE_TARGET} HEAD", returnStdout: true).trim()
        return changedFiles.split("\n")
    } else {
        return []
    }
}

def getTestsToRun(modifiedFiles) {
    def testsToRun = []

    // Run any modified test files
    for (file in modifiedFiles) {
        if (file.startsWith("tests/") && file.endsWith(".spec.ts")) {
            testsToRun.add(file)
        }
    }

    // Run the corresponding test file for any modified rule file
    for (file in modifiedFiles) {
        if (file.startsWith("rules/autoconsent/") && file.endsWith(".json")) {
            def fileName = file.substring("rules/autoconsent/".length())
            def baseName = fileName.substring(0, fileName.lastIndexOf(".json"))
            def testFile = "tests/${baseName}.spec.ts"

            if (fileExists(testFile) && !testsToRun.contains(testFile)) {
                testsToRun.add(testFile)
            }
        }
    }

    return testsToRun
}

pipeline {
    agent { label 'autoconsent-crawler' }
    parameters {
        string(name: 'TEST_RESULT_ROOT', defaultValue: '/mnt/efs/users/smacbeth/autoconsent/ci', description: 'Where test results and configuration are stored')
        choice(name: 'BROWSER', choices: ['chrome', 'webkit', 'iphoneSE', 'firefox'], description: 'Browser')
        string(name: 'BRANCH', defaultValue: 'main', description: 'Branch or PR to checkout (e.g. pr/123)')
    }
    environment {
        NODENV_VERSION = "20.12.1"
        NODENV_ROOT = "/opt/nodeenv"
        PATH = "/opt/nodenv/shims:/opt/nodenv/bin:$PATH"
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
                        def testEnvs = [
                            "${params.TEST_RESULT_ROOT}/us.env",
                            "${params.TEST_RESULT_ROOT}/gb.env",
                            "${params.TEST_RESULT_ROOT}/au.env",
                            "${params.TEST_RESULT_ROOT}/ca.env",
                            "${params.TEST_RESULT_ROOT}/de.env",
                            "${params.TEST_RESULT_ROOT}/fr.env",
                            "${params.TEST_RESULT_ROOT}/nl.env",
                            "${params.TEST_RESULT_ROOT}/ch.env",
                            "${params.TEST_RESULT_ROOT}/no.env"
                        ]
                        for (testEnv in testEnvs) {
                            withEnvFile(testEnv) {
                                def summary = runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, testsToRun)
                                testsFailed += summary.failCount
                                testsTotal += summary.totalCount
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

                    // Apply the status to the previous commit: We're assuming that there was a merge commit when Jenkins picked up the PR.
                    def prCommitSha = sh(script: "git rev-parse HEAD~1", returnStdout: true).trim()
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
