import jwt from 'jsonwebtoken'

const generateJWT = (payload) => {
  const secret = import.meta.env.VITE_JWT_SECRET
  const token = jwt.sign(payload, secret)
  return token
}

export default generateJWT
