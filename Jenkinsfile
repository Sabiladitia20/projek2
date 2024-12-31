pipeline { 
    agent any
    environment {
        DOCKER_IMAGE = 'sabiladitia/car_rent:latest'
        CONTAINER_NAME = 'car_rental_app' // Nama container baru
        PORT_MAPPING = '8081:80' // Port baru: 8081
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
                    bat """
                        docker build -f Dockerfile -t ${DOCKER_IMAGE} . 
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Hentikan dan hapus container lama jika ada
                    bat """
                        docker rm -f ${CONTAINER_NAME} || true
                    """
                    // Jalankan container dalam mode detached dengan port baru
                    bat """
                        docker run -d -p ${PORT_MAPPING} --name ${CONTAINER_NAME} ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }
}
