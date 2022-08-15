import jwt from 'jsonwebtoken'

const tokenGeneration = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '2h' });
}

export default tokenGeneration;
