pipeline {
    agent any

    stages {
      stage('remove old NPM MODULES') {
        steps{
          echo 'removing old NPM MODULES'
          sh 'ls'
          sh 'rm -r node modules'
          echo 'removed old NPM MODULES'
          sh 'ls'
        }
      }
      //  stage('NPM MODULES') {
      //     steps {
      //        echo 'installing node modules'
      //        sh 'npm install'
      //        echo 'installed node modules'
      //     }
      //  }
    }
}