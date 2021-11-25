pipeline {
    
    agent any
    tools{nodejs "node"}

    stages{
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
    
    
        stage('Start Server'){
            steps {
                sh 'npm start'
            }
        }
    }
}
    // stage('Building our image') { 
    //     steps { 
    //         script { 
    //             dockerImage = docker.build registry + ":$BUILD_NUMBER" 
    //         }
    //     } 
    // }

    // stage('Deploy our image') { 
    //   steps { 
    //       script { 
    //           docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) { 
    //                dockerImage.push() 
    //            }
    //        } 
    //    }
    // } 

    // stage('Cleaning up') { 
    //       steps { 
    //             sh "docker rmi $registry:$BUILD_NUMBER" 
    //         }
    //     } 
    // }
