
node('docker && eu-central-1') {

    def img

    stage('Checkout') {
        checkout scm
    }

    stage('Build Docker Image') {
        img = docker.build('autoconsent/crawler')
    }

    img.inside() {

        stage('Fetch dependencies') {
            sh 'npm run fetch-fanboy-list'
            sh 'npm run fetch-site-list'
        }

        stage('Build Library') {
            sh 'cp -R /app/node_modules ./'
            sh 'mkdir -p _site'
            sh 'cp node_modules/bulma/css/bulma.min.css _site/'
            sh 'npm run bundle'
        }

        stage('Run crawl') {
            sh 'cat sites.txt | DISABLE_SANDBOX=true node crawler/index.js | tee results.jl'
        }

        stage('Build results') {
            sh 'cat results.jl | node crawler/report.js'
            sh 'cat results.jl | node crawler/summary.js'
            sh 'mv results.jl _site/'
        }
    }

    stage('Upload results') {
        sh 'aws s3 sync ./_site/ s3://internal.clyqz.com/docs/reconsent/'
    }
}