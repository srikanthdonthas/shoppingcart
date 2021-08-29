pipeline {
    agent any
    stages {
        stage('node packages') { 
            steps {
                echo 'started'
                sh 'npm install' 
                echo 'installed node packages'
            }
        }
        stage('Production build'){
            steps{
                echo 'making production build'
                sh 'npm run build'
                echo 'build process is done'
            }
        }
        stage('serving'){
            steps{
                echo 'installing serve via npm'
                sh 'npm install -g serve'
                echo 'ready to serve'
                sh 'serve -s build'
            }
        }
        stage('Home page'){
            steps{
                echo 'check at http://localhost:5000'
            }
        }
    }
}
// pipeline {
//     agent any
//     stages {
//       stage('remove old NPM MODULES') {
//         steps{
//           sh 'ls'
//           echo 'removing old NPM MODULES'
//           sh 'rm -rf node_modules'
//           echo 'removed old NPM MODULES'
//           sh 'ls'
//         }
//       }
//       stage('installing new NPM MODULES') {
//          steps {
//            sh 'ls'
//            echo 'installing node modules'
//            sh 'npm install'
//            sh 'ls'
//            echo 'installed node modules'
//          }
//       }
//       stage('WORKSPACE') {
//         steps {
//           sh 'pwd'
//           sh 'npm start'
//           //sh 'npm build'
//         }
//       }
//     }
// }