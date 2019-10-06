const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Como se definió /tasks como raíz de las rutas de tasks.js hay que cambiar la ruta
// de '/tasks' a '/'
// router.get('/tasks', (req, res) => {
// router.get('/', (req, res) => {
// Primea forma larga
/*Task.find( (data) => {
    res.json(data);
});*/
// Segunda forma con promesas
/*Task.find()
    .then (data => {
        res.jason(data);
    });   
});*/

//Tercera forma y más moderna con async await. Escribir de forma sincrona acciones asincronas
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('Request Type: ', req.method);
    const task = new Task(req.body);
    console.log('task: ', task);
    // await task.save();
    res.json({
        status: 'Tarea guardada exitosamente!'
    });
});

router.put('/:id', async (req, res) => {
    console.log('req.params: ', req.params);
    await Task.findByIdAndUpdate(req.params.id);
    res.json({
        status: 'Tarea actualizada'
    });
});

router.delete('/:id', async (req, res) => {
    console.log('req.params: ', req.params);
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Tarea eliminada'
    });
});

module.exports = router;