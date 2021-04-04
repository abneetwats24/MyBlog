# Simple blog REST API

## **To start the API using Docker**

### *Prerequisits*

* Docker must be installed
* If using Linux docker-compose also needs to be installed
* If using Windows or Mac Docker Desktop, there is no need to install docker-compose explicetly

#### *Start with docker-compose*

    docker-compose -f docker-compose-innodb-cluster.yml up -d

* API url will be at [http://localhost:8800/api/--endpoints--](http://localhost:8800/api/)

`There is no need to change any environment variable`

## **To start the API using default npm**

### *Prerequisits for using npm*

* MySQL/MariaDB must be install and `blog` named database is created or as per .env variable it should be configured.

#### *Start with npm*

    npm install
    npm start

* API url will be at [http://localhost:8800/api/--endpoints--](http://localhost:8800/api/)

`You need to configure environment variable from .env`

### **DOCS**

* Docs can be found [here](https://documenter.getpostman.com/view/10258403/TzCP8nZ8
)

#### Contributors

* [Abneet Wats](https://www.linkedin.com/in/abneetwats)

* Special Thanks to [Sahil Thakar](https://www.linkedin.com/in/sahil-thakar-b6464b136/)
