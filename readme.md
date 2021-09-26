# docker compose + haproxy + multiple server with node js

1. prepare the build for node app

```
docker build -t nodeapp .
```
make sure that the app name in the haproxy.cfg is correct with respective the one in app build.


2. prepare the build for node app

```
docker build -t nodeapp .
```

setup docker-compose.yml
to start the server 
```
    docker-compose up
```

to stop the server 
```
    docker-compose down
```