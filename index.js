import express from "express";

const app = express();
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Proxy Cora rodando no Railway!");
});

// Railway usa PORT da env
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
