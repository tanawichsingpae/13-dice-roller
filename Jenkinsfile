agent {
  docker {
    image 'node:18-alpine'
    reuseNode true
  }
}
stages {
  stage('Install Dependencies') {
    steps {
      sh 'npm install'
    }
  }
  stage('Run Tests') {
    steps {
      sh 'npm test'
    }
  }
}