#Build image
docker build -t webserver .

#Run image on http://localhost:8080
docker run -it --rm -d -p 8080:80 --name web webserver