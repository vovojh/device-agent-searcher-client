const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'searcher',
})
const table = 'doc_device_agent_tbl';

app.get('/api', function (req, res) {
  let data = {
      'data': [
          {'pid': 1, 'paragraph': 'how are you?'},
          {'pid': 2, 'paragraph': 'nice to meet you'},
          {'pid': 3, 'paragraph': 'good to see you'},
      ]
  }
  res.statusCode = 200;
  res.end(JSON.stringify(data));
})

app.get('/paragraph', function (req, res) {
  conn.connect();
  
  const pids = req.query.pids; 
  const pidsList = pids.split(',');

  const fetchParagraphs = mysql.format('SELECT * FROM ' + table + ' WHERE pid IN (?)', pidsList);

  conn.query(fetchParagraphs, function(err, results, fields){
    if(err){
      console.log(err);
      return;
    }

    console.log(results);

    res.statusCode = 200;
    res.end(JSON.stringify(results));
  });

  conn.end();
})

const server = app.listen(5000, function () {
  const host = 'http://127.0.0.1'
  const port = 5000
  console.log("Example app listening at http://%s:%s", host, port)
})
