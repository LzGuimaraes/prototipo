// const jwt = require('jsonwebtoken');

// const bcrypt = require('bcrypt');

// import * as dotenv from "dotenv"

// dotenv.config()

// const SECRET = process.env.SECRET

// function authMiddleware(req, res, next) {

//     //recebendo o token
//     const token = req.headers.authorization;

//     if (token) {

//         //verificando se o token é valido
//         const accessToken = token.split(' ')[1];

//         jwt.verify(
//             accessToken,
//             process.env.TOKEN_SECRET,
//             (error, professor) => {

//                 //caso o token seja invalido retorna erro
//                 if (error) {
//                     return res.status(403).json({ error: 'Token inválido' })
//                 }

//                 //caso o token seja valido adiciona o id do usuario na requisição
//                 req.id_Professor = professor.id;
//                 next();
//             }
//         );

//     } else {

//         //caso nao tenha token retorna erro
//         return res.status(401).json({ error: 'Token não encontrado' })
//     }
// }

// module.exports = { authMiddleware };