pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.production'
    }
    
  }
  stages {
    stage('Check') {
      steps {
        sh 'docker build -t calculator -f Dockerfile.production .'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}