// this function can be used for error handling in an express app, inplace of using try catch in eatch function.

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
