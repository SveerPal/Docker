######### Docker ##############

images: are templates of projects
	kind of ready to use software
	image are made with source code,library, external dependedncy and tools
	image can not be update
	if you want to make change in image you have to create new image 
	image can not run directly
Container: Running instance of image
	container is proccess that run application with images
	container is an isolated proccess
	means container run indpendently on computer
	seprate version can be install like node 17, node 18 
	
Docker Hub: parent image are availble in docker hub
	hub.docker.computer
	
Docker Desktop: have give more funcnality compare to docker hub

Base Image or Parent Image
	The image is a template of projects
	libreary,code,tools
	sometime project need another image of programming language or other library
	E.g. in node js project needs a base image of node js
	
Pull  Image and run container
	Image can be download with terminal or docker desktop
		Step:
		Download node image from the docker hub
		make a container for node js
		run node in container
		write node js code inside container 
		
		
####################
after creating Dockerfile in project 
#Creating image 
	docker build -t <give image name> .<Direcoty where you want >
	docker build -t basic-app . #latest will create
	#Give Version on image
	docker build -t basic-app:v2 . #version of the images
		docker run --name basic-app-container-v2 -p 5000:5000 basic-app:v2
	
#list of images
	docker images
#Removed when image not in used  	
	docker image rm <imagename >
#Removed when image in used	
	docker image rm <imagename> -f  
#list of container 
	docker ps -a (ps=proccess)
# Removed Container when not in used 
	docker container rm <containername>
# Removed Container when in used 
	docker container rm <containername> -f
#Delete all images and container 
	docker system prune -a
	
############
docker pull node
docker run -it node /bin/bash
docker exec -it <container-name-or-id> /bin/bash
docker inspect --format='{{.State.ExitCode}}' 67f2ac645c68c50227d2c0cafffc80fe5e4cdd5deccdcded61d76f3a9f666205

############# Valume in Docker ##################
in valume we can store permanent data by defualt value store temprary in docker when docker is close the value is gone 

docker run --name basic-container -p 5000:5000 --rm -v C:/Users/Admin-D1/Desktop/Docker/Basic-App:/app basic-app

docker run --name basic-container -p 5100:5000 --rm -v C:/Users/Admin-D1/Desktop/Docker/Basic-App:/app basic-app

############ Compose File ########
compose.yaml
	Store muliple command 
	######
	docker compose up 	
	
	
	Docker hub repositry as like git hub repo 
labs.play-with-docker.com website can live for 4-5 hour 

##############################
docker buildx build --plateform linux/amd64 -t <repositry name of docker hub >	
	