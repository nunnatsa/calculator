pipeline {
  agent any
  stages {
    stage('Check') {
      steps {
        sh 'docker build -t calculator -f Dockerfile.production .'
      }
    }
    stage('Build test image') {
      steps {
        sh 'docker build -t calculator-test -f Dockerfile.test .'
      }
    }
    stage('Run tests') {
      steps {
        sh 'docker run --rm calculator-test'
      }
    }
  }
}