// Importa Módulo com métodos para paths
const path = require("path");

//Importa Express.js
const express = require("express");
//Importa body-parser
const bodyParser = require("body-parser");

//Importa controller de erro
const errorController = require("./controllers/error");

//Importa função de conexão com o banco de dados
const mongoConnect = require("./util/database").mongoConnect;
//Importa modelo user
const User = require("./models/user");
//Executa Express.js
const app = express();

//Define template engine sendo utilizado
app.set("view engine", "ejs");
//Indica pasta com as views
app.set("views", "views");

//Importa as rotas administrativas
const adminRoutes = require("./routes/admin");
//Importa as rotas de clientes do e-commerce
const shopRoutes = require("./routes/shop");

//Utiliza o body parser para parsear os corpos das requisições
//em formato de URL
app.use(bodyParser.urlencoded({ extended: false }));
//Indica o caminho da pasta com documentos públicos e
//e define como método estático no Express.js
app.use(express.static(path.join(__dirname, "public")));

//Middleware para definir o user
app.use((req, res, next) => {
  //Busca no banco de dados através do método findById o usuário com o id especificado
  User.findById("64ac68f7e661ad84c381d0a7")
    //Atribui as informações do user encontrado à req.user
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      //Encaminha para próximo middleware
      next();
    })
    //Catch em caso de erros loga o erro gerado
    .catch((err) => console.log(err));
});

//Indica que requisições para '/admin' estão disponíveis em adminRoutes
app.use("/admin", adminRoutes);
//Disponibiliza as rotas em shop routes para todas as requisições
app.use(shopRoutes);

//Indica as rotas de erro
app.use(errorController.get404);

//Conecta no banco de dados e configura o Express.js para "ouvir" todas as requisições para a porta 3000
mongoConnect((client) => {
  app.listen(3000);
});
