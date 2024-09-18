function isAuthenticated(req, res, next) {
    // Check if user is authenticated via session or cookies
    if (req.isAuthenticated() || req.cookies.uid) {
        return next();
    }

    // Flash an error message and redirect to a login page
    req.flash("error", "Please login.");
    res.redirect("back"); // Redirect to login page or another appropriate route
}

module.exports = {
    isAuthenticated
};
