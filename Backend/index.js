const express = require('express');
const cors = require('cors');
const sql = require('msnodesqlv8');

const app = express();
app.use(cors());
app.use(express.json());

const connectionString = 'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-K74HTSO\\SQLEXPRESS;Database=test_db;Trusted_Connection=Yes;';

app.post('/login', (req, res) => {
  const sqlQuery = "SELECT * FROM userlogin WHERE UserName = ? AND password = ?";
  const { userid, password } = req.body;

  sql.query(connectionString, sqlQuery, [userid, password], (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("success");
    } else {
      const userCheckQuery = "SELECT * FROM tms_User WHERE userid = ?";
      sql.query(connectionString, userCheckQuery, [userid], (err, userData) => {
        if (err) {
          console.error(err);
          return res.json("Error");
        }
        if (userData.length > 0) {
          return res.json("invalid_credentials");
        } else {
          return res.json("user_not_found");
        }
      });
    }
  });
});

app.post('/getAuditData', (req, res) => {
  const { date, shiftType, boothType, vehicleType, journeyType, paymentType, exemptType, vehicleNum, transactionNum, auditNum } = req.body;
  let sqlQuery = "SELECT * FROM audit_data WHERE 1=1";
  let queryParams = [];

  if (date) { sqlQuery += " AND date = ?"; queryParams.push(date); }
  if (shiftType) { sqlQuery += " AND shiftType = ?"; queryParams.push(shiftType); }
  if (boothType) { sqlQuery += " AND boothType = ?"; queryParams.push(boothType); }
  if (vehicleType) { sqlQuery += " AND vehicleType = ?"; queryParams.push(vehicleType); }
  if (journeyType) { sqlQuery += " AND journeyType = ?"; queryParams.push(journeyType); }
  if (paymentType) { sqlQuery += " AND paymentType = ?"; queryParams.push(paymentType); }
  if (exemptType) { sqlQuery += " AND exemptType = ?"; queryParams.push(exemptType); }
  if (vehicleNum) { sqlQuery += " AND vehicleNum = ?"; queryParams.push(vehicleNum); }
  if (transactionNum) { sqlQuery += " AND transactionNum = ?"; queryParams.push(transactionNum); }
  if (auditNum) { sqlQuery += " AND auditNum = ?"; queryParams.push(auditNum); }

  sql.query(connectionString, sqlQuery, queryParams, (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.get('/getShiftTypes', (req, res) => {
  const sqlQuery = "SELECT DISTINCT ShiftCode FROM tms_WorkShift";

  sql.query(connectionString, sqlQuery, (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
