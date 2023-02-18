# node init and installations

    $ docker-compose run --rm node npm init
    $ docker-compose run --rm node npm install complete-teltonika-parser
    $ docker-compose run --rm node npm install dotenv
    $ docker-compose run --rm node npm install winston
    <!-- $ docker-compose run --rm node npm install redis -->
    <!-- $ docker-compose run --rm node npm install socket.io -->


# Step 1 - Do the build images

    $ docker-compose  build
    $ docker-compose up    --build
    $ docker-compose up -d --build
