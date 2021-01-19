const mysqlServiceName = process.env.DATABASE_SERVICE_NAME,
  mysqlDatabase = process.env.MYSQL_DATABASE,
  mysqlPassword = process.env.MYSQL_PASSWORD,
  mysqlUser = process.env.MYSQL_USER;

module.exports = {
  host: mysqlServiceName,
  database: mysqlDatabase,
  user: mysqlPassword,
  password: mysqlUser
};