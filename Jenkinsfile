properties([
    parameters([
        choice(name: 'CHANNEL', defaultValue: 'staging', choices: 'staging\nproduction')
    ]),
])

node('docker && !gpu') {

    def img
    def commitHash

    stage('Checkout') {
        checkout scm
        commitHash = sh(returnStdout: true, script: 'git log --pretty=format:\'%h\' -n 1').trim()
        currentBuild.description = "${commitHash}-${params.CHANNEL}"
    }

    stage('Build Docker Image') {
        img = docker.build('autoconsent/build')
    }

    img.inside() {

        stage('Build') {
            sh 'cp -r /app/node_modules ./'
            sh 'npm run bundle'
        }

        stage('Build rules') {
            sh 'node rules/build.js'
            sh 'rm -f rules/rules.min.*'
            sh "jq -c '. + { version: \"${commitHash}\" }' rules/rules.json > rules/rules.min.json"
            sh 'brotli --input rules/rules.min.json --output rules/rules.min.json.br'
            sh "gzip -9 rules/rules.min.json"
        }
    }

    if (env.BRANCH_NAME == 'master') {
        stage('Publish') {
            sh "aws s3 cp rules/rules.min.json.br s3://cdn.cliqz.com/autoconsent/rules/${commitHash}.json.br --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --content-encoding br --content-type application/json --cache-control \"immutable\""
            sh "aws s3 cp rules/rules.min.json.gz s3://cdn.cliqz.com/autoconsent/rules/${commitHash}.json.gz --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --content-encoding gzip --content-type application/json --cache-control \"immutable\""
            sh "echo '{\"ruleVersion\":\"${commitHash}\",\"disabled\":[]}' > config.json"
            def fileName = 'config.json'
            if (params.CHANNEL == 'staging') {
                fileName = 'staging-config.json'
            }
            sh "aws s3 cp config.json s3://cdn.cliqz.com/autoconsent/${fileName} --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --content-type application/json --cache-control \"max-age=3600\""
        }
    }
}
