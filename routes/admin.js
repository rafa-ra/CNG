//Importa módulo path para lidar com paths
const path = require("path");
//Importa Express.js
const express = require("express");
//Importa controllers administrativos
const adminController = require("../controllers/admin");
//Importa método de roteamento do Express.js
const router = express.Router();

//Define o método "getAddProduct" para "/add-product".
//Rota para requisição da página de adição de produtos.
router.get("/add-product", adminController.getAddProduct);

//Define o método "getProducts" para requisições para "/products"
//Rota para requisição da página de listagem de produtos.
router.get("/products", adminController.getProducts);

//Define o método "postAddProduct" para requisições para "/add-product"
//Rota de adição de produtos
router.post("/add-product", adminController.postAddProduct);

//Define o método "getEditProduct" para requisições para "/edit-product/:productId"
//Rota para requisição da página de edição de produtos.
router.get("/edit-product/:productId", adminController.getEditProduct);

//Define o método "postEditProduct" para requisições para "/edit-product"
//Rota de edição de produtos
router.post("/edit-product", adminController.postEditProduct);

//Define o método "postDeleteProduct" para requisições para "/delete-product"
//Rota de deleção de produtos
router.post("/delete-product", adminController.postDeleteProduct);

//Exporta as rotas
module.exports = router;
