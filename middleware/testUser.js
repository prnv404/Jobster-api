const { BadRequestError } = require('../errors')

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Test user . ReadOnly')
  }
  next()
}

module.exports = testUser
