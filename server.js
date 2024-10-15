const express= require('express');
const funcRoutes = require('./routes/FuncionarioRoutes')

const app= express();
const port = 3004;
app.use(express.json());
app.use('/api', funcRoutes)

app.listen(port, () => {
    console.log("servidor rodando na porta " + port)

})