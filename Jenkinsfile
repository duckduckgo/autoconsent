def runPlaywrightTests(resultDir, browser, grep) {
    try {
        timeout(20) {
            sh 'mkdir -p ./test-results'
            sh """
                PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --project $browser --reporter=junit --workers 10 --grep "$grep"|| true
            """
        }
    } finally {
        junit 'results.xml'
        sh """
            mkdir -p ${resultDir}/results/${BRANCH_NAME}/${BUILD_NUMBER}/$REGION/
            mkdir -p ./test-results
            mv ./test-results/ ${resultDir}/results/${BRANCH_NAME}/${BUILD_NUMBER}/$REGION/
        """
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
        choice(name: 'BROWSER', choices: ['webkit', 'iphoneSE', 'chrome', 'firefox'], description: 'Browser')
        string(name: 'GREP', defaultValue: '', description: 'filter for tests matching a specific string')
    }
    environment {
        NODENV_VERSION = "14.15.4"
        NODENV_ROOT = "/opt/nodeenv"
        PATH = "/opt/nodenv/shims:/opt/nodenv/bin:$PATH"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh '''
                npm ci
                npx playwright install webkit
                '''
                script {
                    currentBuild.description = "${params.BROWSER} - ${params.GREP}"
                }
            }
        }
        
        stage('Test: DE') {
            steps {
                withEnvFile("${params.TEST_RESULT_ROOT}/de.env") {
                    runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, params.GREP)
                }
            }
        }
        
        stage('Test: US') {
            steps {
                withEnvFile("${params.TEST_RESULT_ROOT}/us.env") {
                    runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, params.GREP)
                }
            }
        }
        
        stage('Test: GB') {
            steps {
                withEnvFile("${params.TEST_RESULT_ROOT}/gb.env") {
                    runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, params.GREP)
                }
            }
        }
        
        stage('Test: FR') {
            steps {
                withEnvFile("${params.TEST_RESULT_ROOT}/fr.env") {
                    runPlaywrightTests(params.TEST_RESULT_ROOT, params.BROWSER, params.GREP)
                }
            }
        }
    }
}
