module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    console.log('error_msg', 'Please log in to view that resource');
    console.log('/admin <---');
  }
}