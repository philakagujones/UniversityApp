const blacklistToken = require('../config/blacklistToken')

router.post('/logout', blacklistToken, (req, res) => {
   res.status(200).json({message: 'A user has succesfully logged out'})
})

module.exports = router;