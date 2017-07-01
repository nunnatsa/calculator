pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.production'
    }
    
  }
  stages {
    stage('Run') {
      steps {
        sh 'node app.js'
      }
    }
  }
}