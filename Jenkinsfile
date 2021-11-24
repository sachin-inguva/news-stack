pipeline {
    environment { 
        registry = "pkumar12/newsstack" 
        registryCredential = '331bd408-0471-4fdc-99b7-6870d2b7b7e6' 
        dockerImage = '' 
    }
    agent any
    stages{
    stage('Building our image') { 
        steps { 
            script { 
                dockerImage = docker.build registry + ":$BUILD_NUMBER" 
            }
        } 
    }

    stage('Deploy our image') { 
      steps { 
          script { 
              docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) { 
                   dockerImage.push() 
               }
           } 
       }
    } 

    stage('Cleaning up') { 
          steps { 
                sh "docker rmi $registry:$BUILD_NUMBER" 
            }
        } 
    }
}