# Express-Mysql-Webapplication

참고 : https://victorydntmd.tistory.com/29#init

---------------------------------------------------

# 목표 : node js & mysql로 간단한 web application 구성

1. 프로젝트 생성

        # express -e seq-crud-exam
        # cd seq-crud-exam
        # npm install
        # npm install mysql2 sequelize
        # npm install -g sequelize-cli

2. sequelize 빌드

        # sequelize init

3. database 설정 및 생성

  - config/config.json의 password 부분의 자신의 mysql 비밀번호를 적는다.
  
          "development": {
            "username": "root",
            "password": "여기",
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "operatorsAliases": false
          }
          ..
  
  - database_development 생성
  
        # create database database_development;
  
  - 결과
  
        Query OK, 1 row affected (0.01 sec)
