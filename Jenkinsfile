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
      stage('WORKSPACE') {
        steps {
          sh 'pwd'
          sh 'cd ..'
          sh 'ls'
        }
      }
    }
}