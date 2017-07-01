pipeline {
  agent none
  stages {
    stage('Install') {
      steps {
        sh 'docker build -t calculator -f Dockerfile.production .'
      }
    }
  }
}