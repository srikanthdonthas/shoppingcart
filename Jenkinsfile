pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('start'){
          steps{
            sh 'npm start'
          }
        }
    }
}