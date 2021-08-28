pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        node {
            env.NODEJS_HOME = "${tool 'Node 6.x'}"
            env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
            sh 'npm --version'
          }
        } 
      }
    }

  }
}