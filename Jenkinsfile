pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.production'
    }
    
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
  }
}