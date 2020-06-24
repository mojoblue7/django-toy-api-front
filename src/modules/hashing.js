const crypto = require('crypto');
const util = require('util');
const makeHashedPwd = async (password) => {
  const randombytesPromise = util.promisify(crypto.randomBytes);
  const pbkdf2Promise = util.promisify(crypto.pbkdf2);
  const buf = await randombytesPromise(64);
  const salt = buf.toString('base64');
  const key = await pbkdf2Promise(password, salt, 101385, 64, 'sha512');
  const hashed = key.toString('base64');
  return [hashed, salt];
};

export default makeHashedPwd;
