import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import orderRoutes from './routes/order.js';
import { swaggerUi, specs } from './swagger.js';

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/orderdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/order', orderRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Definir a porta do servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Documentação disponível em http://localhost:3000/api-docs`);
});
