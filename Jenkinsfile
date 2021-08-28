pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 16.17.0') {
                    sh 'ls'
                }
            }
        }
    }
}