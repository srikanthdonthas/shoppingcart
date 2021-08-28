pipeline {
    agent any

    stages {
      stage('remove old NPM MODULES') {
        steps{
          sh 'ls'
          echo 'removing old NPM MODULES'
          sh 'if [ -d "$node_modules" ]; then rm -Rf $node_modules; fi'
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