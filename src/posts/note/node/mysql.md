---
title: "Use MYSQL"
date: 2022-07-11T16:22:33+07:00
lastmod: 2022-07-11T16:22:37+07:00
description: "Install mysql"
---
## Install MYSQL Termux
- `pkg update -y && pkg upgrade -y`
- `pkg install mariadb -y`
- `mysqld_safe -u root`
- `mysql -u $(whoami)`
```bash
use mysql;
set password for 'root'@'localhost' = password('1234');
flush privileges;
quit;
```
- `mysql -u root -p`
```mysql
CREATE DATABASE db_codelab;
use db_codelab;
CREATE TABLE mahasiswa (
 id int(11) NOT NULL AUTO_INCREMENT,
 nama varchar(100) NOT NULL,
 nim varchar(100)NOT NULL,
 PRIMARY KEY (id)
);
INSERT INTO mahasiswa VALUES (null, 'Gun Gun Priatna', '123456789');
SELECT * FROM mahasiswa;
```

## use on node js
- `yarn add mysql`
- testing :
```javascript
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "node_restapi",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

let data = {title: 'hello world', body: 'nice'};
  
  let sqlQuery = "INSERT INTO items SET ?";
  
con.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
  console.log(results)
  });


sqlQuery = "SELECT * FROM items";

con.query(sqlQuery, (err, results) => {
  if (err) throw err;
  console.log(results);
});

```
