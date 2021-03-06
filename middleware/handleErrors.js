const { GeneralError } = require('../utils/errors');

const handleErrors = (err, req, res, next) => {
  console.log('handling error')
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}


module.exports = handleErrors;