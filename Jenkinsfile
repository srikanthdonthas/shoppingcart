pipeline {
    agent any
    stages {
      stage('remove old NPM MODULES') {
        steps{
          sh 'ls'
          echo 'removing old NPM MODULES'
          sh 'rm -rf node_modules'
          echo 'removed old NPM MODULES'
          sh 'ls'
        }
      }
      stage('installing new NPM MODULES') {
         steps {
           sh 'ls'
           echo 'installing node modules'
           sh 'npm install'
           sh 'ls'
           echo 'installed node modules'
         }
      }
      stage(moving to folder to desktop) {
        steps {
          sh 'ls'
          sh 'cd ..'
          sh 'ls'
        }
      }
    }
}