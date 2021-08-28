pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>'){
          sh 'npm install'
        } 
      }
    }

  }
}