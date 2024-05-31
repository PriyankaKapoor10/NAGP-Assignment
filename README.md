This repo has NodeJs API server code which is connecting to MongoDB (with Authentication) to read and write the data using REST API

Git Repo Link is: https://github.com/PriyankaKapoor10/NAGP-Assignment

Docker Hub Link: https://hub.docker.com/repository/docker/kapoorpriyanka/web-application/general

Recording Link: (https://nagarro-my.sharepoint.com/:v:/p/priyanka_kapoor/EaRlwqx2mRVBucvMsW_WCggB7DPSrdxfYo-Xw5Lxywl7xw?e=pGHT7o)

Document with Execution Logs and Screenshots: 

Endpoints Exposed: (PLease note: IP needs to be changed here depending on IP exposed by LoadBalancer Service)

To get all data:
curl --location 'http://34.41.172.63/api/getAllDoc'

To post data:

curl --location 'http://34.41.172.63/api/insertDoc' \
--header 'Content-Type: application/json' \
--data '{
    "name": "priyanka kapoor",
    "age" : 28
}'

To get data by ID: (ID needs to be changed. Check id while executing POST API call)

curl --location 'http://34.41.172.63/api/getDoc/6658cf4d71f428e673d099d7'

To update existing data:

curl --location --request PATCH 'http://35.225.194.0/api/updateDoc/6657299e9416ed2b909f99fe' \
--header 'Content-Type: application/json' \
--data '{
    "name": "mohan",
    "age": 22
}'

To delete existing data/record:

curl --location --request DELETE 'http://35.225.194.0/api/deleteDoc/665729d226638b64dacada46'