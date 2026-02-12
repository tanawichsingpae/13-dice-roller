pipeline {
  agent {
    docker {
      image 'node:18-alpine'
      reuseNode true
    }
  }

  environment {
    VERCEL_TOKEN = credentials('devops13-vercel-token')
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm install vercel'
        sh './node_modules/.bin/vercel deploy --prod --prebuilt'
      }
    }
  }

  post {
    always {
      junit 'test-results/junit.xml'
    }
  }
}
