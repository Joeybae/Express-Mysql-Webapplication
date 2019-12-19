# Express-Mysql-Webapplication

참고 : https://victorydntmd.tistory.com/29#init

더 자세한 설명은 위의 참고 글에서 확인하실 수 있습니다!

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
        
        
4. Table 생성 (sign up & login 용)

  - sequelize 명령어로 table 생성

        # sequelize model:create --name user --attributes "name:string, email:string, password:string, salt:string"

  - db migration
  
        # sequelize db:migrate

  - 결과
  
        mysql> desc users;
        +-----------+--------------+------+-----+---------+-------+
        | Field     | Type         | Null | Key | Default | Extra |
        +-----------+--------------+------+-----+---------+-------+
        | name      | varchar(255) | NO   |     | NULL    |       |
        | email     | varchar(255) | NO   | PRI | NULL    |       |
        | password  | varchar(255) | NO   |     | NULL    |       |
        | salt      | varchar(255) | YES  |     | NULL    |       |
        | createdAt | datetime     | NO   |     | NULL    |       |
        | updatedAt | datetime     | NO   |     | NULL    |       |
        +-----------+--------------+------+-----+---------+-------+
        6 rows in set (0.00 sec)

5. 회원가입

  - 서버 실행
  
        # npm start
  
  - 회원가입 페이지로 이동 (주소창에 아래와 같이 입력)
  
        # http://localhost:3000/users/sign_up

  - 회원가입 페이지
  
  ![다운로드](https://user-images.githubusercontent.com/45925992/70890728-1669c580-2029-11ea-8ab3-e64ac7e14a47.png)
  
  - 회원가입 결과
  
        mysql> select * from users;
        +------+---------------+----------+------+---------------------+---------------------+
        | name | email         | password | salt | createdAt           | updatedAt           |
        +------+---------------+----------+------+---------------------+---------------------+
        | bae  | 1234@1234.com | 1234     | NULL | 2019-12-16 07:31:51 | 2019-12-16 07:31:51 |
        +------+---------------+----------+------+---------------------+---------------------+
        1 row in set (0.00 sec)

6. 로그인

  - 서버 실행
  
        # npm start
  
  - 로그인 페이지로 이동 (주소창에 아래와 같이 입력)
  
        # http://localhost:3000/users/login

  - 로그인 페이지
  
  ![다운로드 (1)](https://user-images.githubusercontent.com/45925992/70890912-7fe9d400-2029-11ea-890f-580debd13672.png)
  
----------------------------------------

# 12.18일 추가 내용

  - veiws/ show, edit 추가
  - insert, query, update, delete 기능 추가
  - method-override 설치 및 사용
  - posts table 생성
  
# 12.18일 발생한 error

  - edit 페이지로 이동 시 error발생
  
# 12.19 추가 내용
  
  - edit 페이지 이동 시 error 발생 문제 해결 (routes/index.js 52번째 줄 '/edit/:id' -> '/board/:id'로 변경)
  - reply table 생성하는 logic 추가 (# sequelize model:create --name reply --attributes "postId:integer, writer:string, content:text")
  - post와 reply 1:M 관계 설정 (models/post.js and reply.js)
  - 댓글 기능 추가(routes/index.js)
  - 댓글 뷰 추가(views/show.ejs)