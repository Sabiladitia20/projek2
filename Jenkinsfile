pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'sabiladitia/car_dealer:latest'
        CONTAINER_NAME = 'car_dealer'
        PORT_MAPPING = '9091:80' // Menggunakan port 9090 untuk Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                deleteDir() // Membersihkan workspace
                checkout(
                    scm: [
                        $class: 'GitSCM', 
                        branches: [[name: 'main']], 
                        userRemoteConfigs: [[url: 'https://github.com/Sabiladitia20/projek2.git']]
                    ]
                )
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Pastikan menggunakan perintah 'bat' di Windows jika menggunakan Docker lewat cmd
                    bat """
                        docker build -f Dockerfile -t ${DOCKER_IMAGE} . 
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Jalankan container menggunakan Docker
                    bat """
                        docker run -p ${PORT_MAPPING} --name ${CONTAINER_NAME} ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }
}
