# Menggunakan image nginx sebagai base image
FROM nginx:alpine

# Menyalin file HTML, CSS, dan JS ke direktori yang akan dilayani nginx
COPY . /usr/share/nginx/html

# Mengekspos port 80 untuk web server
EXPOSE 80
