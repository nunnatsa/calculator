pipeline {
  agent {
    docker {
      image 'node:7'
    }
    
  }
  stages {
    stage('Install') {
      steps {
        sh 'sudo npm install'
      }
    }
  }
}