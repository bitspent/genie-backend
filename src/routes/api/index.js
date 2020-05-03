const router = require('express').Router()

router.use('/funding', require('./funding'))
router.use('/prizes', require('./prizes'))
router.use('/games', require('./games'))
router.use('/login', require('./login'))
router.use('/pools', require('./pools'))

router.use(function (err, req, res, next) {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message
        return errors
      }, {})
    })
  }
  return next(err)
})

module.exports = router
