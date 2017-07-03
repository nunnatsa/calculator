pipeline {
  agent any
  stages {
    stage('Check') {
      steps {
        sh 'make prod-image'
      }
    }
    stage('Build test image') {
      steps {
        sh 'make test-image'
      }
    }
    stage('Run tests') {
      steps {
        sh 'make test'
      }
    }
  }
}