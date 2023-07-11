//Exporta a rota '404'
exports.get404 = (req, res, next) => {
  //Envia o status 404, de "página não encontrada".
  //O método "render" renderiza a página do arquivo 404.ejs e
  //passa pageTitle e path como parâmetros
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
};
