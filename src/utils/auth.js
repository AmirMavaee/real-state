const { hash, compare } = require("bcryptjs");

async function hashPassword(password) {
  const hashPass = await hash(password, 12);
  return hashPass;
}

async function verifyPassword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}

export { hashPassword, verifyPassword };
