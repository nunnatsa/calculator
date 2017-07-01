pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.production'
    }
    
  }
  stages {
    stage('Install') {
      steps {
        sh 'build -t calculator -f Dockerfile.production .'
      }
    }
  }
}