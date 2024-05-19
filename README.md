This repo has NodeJs API server code which is connecting to MongoDB to read and write the data using REST API

Git Repo Link is: https://github.com/PriyankaKapoor10/NAGP-Assignment

Docker Hub Link: https://hub.docker.com/repository/docker/kapoorpriyanka/web-application/general

Endpoints Exposed: (PLease note: IP needs to be changed here depending on IP exposed by LoadBalancer Service)
To get all data:
curl --location 'http://34.28.60.190/api/getAll'

To post data:
curl --location 'http://34.28.60.190/api/post' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "",
    "name": "Mohan",
    "age": 22
}'

Recording Link: To be created

