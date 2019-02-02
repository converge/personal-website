module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('AUTHENTICADO POOO!!')
      return next();
    }
    console.log('user not authenticated <-');
  }
}