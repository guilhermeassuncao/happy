//Importar Dependencias
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//Iniciar o express
const server = express()


server
//Utilizar body do req
.use(express.urlencoded({extended: true}))
//Iniciando Arquivos Estaticos
.use(express.static('public'))
//Configurar Template Engine
.set('views', path.join(__dirname, 'views'))
.set('view engine','hbs')
//Criar uma Rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
//Ligar Servidor
.listen(5500)



// const {
//     pageLanding,
//     pageStudy,
//     pageGiveClasses,
//     saveClasses
// } = require('./pages')

// //Configura Nunjucks
// const nunjucks = require('nunjucks')
// nunjucks.configure('src/views', {
//     express: server,
//     noCache: true,
// })

// //Inicio da Configuração do Servidor
// server
//     //Receber os dados do req.body
//     .use(express.urlencoded({
//         extended: true
//     }))
//     //Configura Arquivos Estáticos (Css, Scripts e Imagens)
//     .use(express.static('public'))
//     //Rotas da Aplicação
//     .get('/', pageLanding)
//     .get('/study', pageStudy)
//     .get('/give-classes', pageGiveClasses)
//     .post('/save-classes', saveClasses)
//     .listen(5500);