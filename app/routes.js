module.exports = function(app) {
  /**
   * API routes
   */
  app.get('/api', function(req, res) {
      res.json({
        message: 'Welcome to The Brewery'
      })
  });
  
  /**
   * Health Check route 
   * */  
  app.get('/health', function(req, res) {
    res.json({
      status: 'Healthy'
    })
});
};