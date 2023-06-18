# GASS - Gait Analysis from Single camera Setup 
## Introduction 
This project is the client server for GASS (Gait Analysis from Single camera Setup).
## Requirements
[Docker](https://www.docker.com/)
## Usage
First build the image with Docker
```
docker build --platform linux/amd64 -t gass-client:v1 -f Dockerfile
```
Then run it using docker run. You will also have to fill the environment variables with your own values.
```
docker run -d -p <port>:3000 \
-e SERVER_URL="http://SERVER_ADDR" \
--name gass-client gass-client:v1
```
