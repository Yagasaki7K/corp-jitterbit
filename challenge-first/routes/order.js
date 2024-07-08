import express from 'express';
import Order from '../models/order.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - productId
 *         - quantity
 *         - price
 *       properties:
 *         productId:
 *           type: integer
 *           description: ID do produto
 *         quantity:
 *           type: integer
 *           description: Quantidade do item
 *         price:
 *           type: number
 *           description: Preço do item
 *       example:
 *         productId: 2434
 *         quantity: 1
 *         price: 1000
 *     Order:
 *       type: object
 *       required:
 *         - orderId
 *         - value
 *         - creationDate
 *         - items
 *       properties:
 *         orderId:
 *           type: string
 *           description: ID do pedido
 *         value:
 *           type: number
 *           description: Valor total do pedido
 *         creationDate:
 *           type: string
 *           format: date-time
 *           description: Data de criação do pedido
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Item'
 *       example:
 *         orderId: v10089016vdb
 *         value: 10000
 *         creationDate: 2023-07-19T12:24:11.529Z
 *         items:
 *           - productId: 2434
 *             quantity: 1
 *             price: 1000
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Erro no servidor
 */
router.post('/', async (req, res) => {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    const transformedOrder = {
        orderId: numeroPedido,
        value: valorTotal,
        creationDate: new Date(dataCriacao),
        items: items.map(item => ({
            productId: item.idItem,
            quantity: item.quantidadeItem,
            price: item.valorItem
        }))
    };

    try {
        const newOrder = new Order(transformedOrder);
        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Obter os dados de um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Dados do pedido retornados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.get('/:orderId', async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) {
            return res.status(404).send({ message: 'Pedido não encontrado' });
        }
        res.send(order);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Erro no servidor
 */
router.get('/list', async (req, res) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

/**
 * @swagger
 * /order/{orderId}:
 *   put:
 *     summary: Atualizar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.put('/:orderId', async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate({ orderId: req.params.orderId }, req.body, { new: true });
        if (!order) {
            return res.status(404).send({ message: 'Pedido não encontrado' });
        }
        res.send(order);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Deletar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/:orderId', async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({ orderId: req.params.orderId });
        if (!order) {
            return res.status(404).send({ message: 'Pedido não encontrado' });
        }
        res.send({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

export default router;
