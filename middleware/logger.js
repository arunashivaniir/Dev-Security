function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.time("RequestTime");
res.on("finish", () => console.timeEnd("RequestTime"));
next();

}

module.exports = logger;
