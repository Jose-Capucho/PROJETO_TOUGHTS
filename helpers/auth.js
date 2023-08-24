module.exports.checkAuth = function (req, res, next) {

    const userId = req.session.userid;

    if (!userId) {
        res.redirect('/login');
    }

    next();
}

// Middleware para barrar os logins para rotas seguras quando ele estiver deslogado