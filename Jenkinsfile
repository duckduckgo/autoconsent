def runPlaywrightTests(resultDir, browser, grep) {
    try {
        timeout(120) {
            sh """
                rm -f results.xml
                PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test tests/_sample-test.spec.ts --project $browser --reporter=junit --grep "$grep"|| true
            """
        }
    } finally {
        def summary = junit skipMarkingBuildUnstable: true, skipPublishingChecks: true, testResults: 'results.xml'
        return summary
    }
}

def withEnvFile(envfile, Closure cb) {
    def props = readProperties(file: envfile)
    withEnv(props.collect{ entry -> "${entry.key}=${entry.value}" }) {
        cb()
    }
}

pipeline {
    agent { label 'autoconsent-crawler' }
    parameters {
        string(name: 'TEST_RESULT_ROOT', defaultValue: '/mnt/efs/users/smacbeth/autoconsent/ci', description: 'Where test results and configuration are stored')
        choice(name: 'BROWSER', choices: ['chrome', 'webkit', 'iphoneSE', 'firefox'], description: 'Browser')
        string(name: 'GREP', defaultValue: '', description: 'filter for tests matching a specific string')
        string(name: 'NSITES', defaultValue: '1', description: 'number of sites to test per CMP')
        string(name: 'BRANCH', defaultValue: 'main', description: 'Branch or PR to checkout (e.g. pr/123)')
    }
    environment {
        NODENV_VERSION = "16.16.0"
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
                    userRemoteConfigs: [[refspec: "+refs/pull/*/head:refs/remotes/origin/pr/*", credentialsId: 'GitHubAccess', url: 'https://github.com/duckduckgo/autoconsent.git']]])
            }
        }
        
        stage('Build') {
            steps {
                sh '''
                npm ci
                npx playwright install
                '''
                script {
                    currentBuild.description = "${params.BRANCH} - ${params.BROWSER}"
                }
            }
        }
        
        stage('Test') {
            steps {
                script { 
                    env.testsFailed = 0
                    env.testsTotal = 0
                    withEnv(["NSITES=${params.NSITES}}"]) {
                        def testEnvs = [
                            // "${params.TEST_RESULT_ROOT}/de.env",
                            // "${params.TEST_RESULT_ROOT}/us.env",
                            "${params.TEST_RESULT_ROOT}/gb.env"
                        ]
                        for (testEnv in testEnvs) {
                            withEnvFile(testEnv) {
                                def summary = runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, params.GREP)
                                env.testsFailed += summary.failCount
                                env.testsTotal += summary.totalCount
                            }
                        }
                        
                    }
                }
            }
        }

        stage('Post results to Github') {
            when {
                expression {
                    return env.BRANCH_NAME != null
                }
            }
            steps {
                script {
                    def prCommitSHA = sh(script: "git log --pretty=format:'%H' -n 1 origin/pr/${env.CHANGE_ID}", returnStdout: true).trim()
                    githubNotify(
                            account: 'duckduckgo', 
                            repo: 'autoconsent', 
                            context: 'Tests / Coverage sample',
                            sha: "${prCommitSHA}", 
                            description: "${env.testsFailed}/${env.testsTotal} failed", 
                            status: 'SUCCESS')
                }
            }
        }
    }
}
