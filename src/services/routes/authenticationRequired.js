require('dotenv').config()
const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ISSUER,
  clientId: process.env.OKTA_CLIENT_ID,
  assertClaims: {
    aud: 'api://default',
  },
});

const authenticationRequired = (req, res, next) => {
  const authHeader = req.headers.authorization || ''
  console.log('header: ', authHeader)
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }
  
  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      console.log('error: ', err)
      res.status(401).send(err.message);
    });
}

module.exports = authenticationRequired;