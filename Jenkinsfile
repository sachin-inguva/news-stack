pipeline {
    environment { 
        registry = "pkumar12/newsstack" 
        registryCredential = '331bd408-0471-4fdc-99b7-6870d2b7b7e6' 
        dockerImage = '' 
    }
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stage('Building our image') { 
15        steps { 
16            script { 
17                dockerImage = docker.build registry + ":$BUILD_NUMBER" 
18            }
19        } 
20  }
21
    stage('Deploy our image') { 
22      steps { 
23          script { 
24              docker.withRegistry( '', registryCredential ) { 
25                   dockerImage.push() 
26              }
27          } 
28      }
29  } 
30
    stage('Cleaning up') { 
31          steps { 
32                sh "docker rmi $registry:$BUILD_NUMBER" 
33          }
34  } 
}