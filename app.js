const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors'); //Para permitir solicitudes desde otro puerto
const bodyParser = require('body-parser');
const autentRoutes = require ('./routes/autentRoutes');

dotenv.config()
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json())
app.use('/api/auth', autentRoutes)

const PORT = process.env.PORT||3000;
// const JWT_SECRET = process.env.JWT_SECRET; 
app.listen(PORT,() => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

// const users = [
//     {id:1, name:"Loly Villamizar", email: "lolyvillamizar@gmail.com", password: "123454321"}, 
//     {id:2, name:"Ivan Villamil", email: "ivanvillamil12@gmail.com", password: "asdf"},
//     {id:3, name:"Tamara Franco", email: "tamara098@gmail.com", password: "qwer"},
//     {id:4, name:"Mario Vargas Carvajal", email: "mariovargascarvajar@gmail.com", password: "0987"}
// ]; //simula una base de datos

// app.post('/register',async(req,res)=>{
//     const {name, email, password} = req.body;
    
//     //Encriptar contraseña
//     const hashedPassword = await bcrypt.hash(password,10);
//     const newUser = {name, email, password: hashedPassword};
//     users.push(newUser);
    
//     console.log(users)
//     res.status(201).json({message: 'Usuario registrado exitosamente'});

// });

// app.post('/login',async(req,res)=>{
//     const {email,password} = req.body;
//     const user = users.find(user => user.email === email);

//     if(!user || !(await bcrypt.compare(password, user.password))){
//         return res.status(401).json({message: 'Credenciales incorrectas'});
//     }

//     //Genera token JWT
//     const token = jwt.sign({ email: user.email}, process.env.JWT_SECRET,{
//         expiresIn:'1h'});
//     console.log("Haz iniciado sesión", token);
//     res.json({token});
// }); 

// const authenticateToken = (req, res, next) =>{
//     const authHeader = req.headers['authorization'];
//     const token = authHeader&&authHeader.split(' ')[1];

//     if(!token) return res.status(401).json({message: 'token requerido'});

//     jwt.verify(token,JWT_SECRET,(err,user)=>{
//         if(err) return res.status(403).json({message: 'Token inválido'});
//         req.user = user;
//         next();
//     });
// };

// app.get('/protected', authenticateToken,(req, res)=>{
//     res.json({message: 'Acceso autorizado', user: req.user});
// });

// app.listen(PORT,()=>{
//     console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
// });


