pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.production'
    }
    
  }
  stages {
    stage('Check') {
      steps {
        sh 'npm --version'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}