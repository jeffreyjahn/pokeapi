const task = require('../controllers/controller')

module.exports= (app)=>{
    app.get('/', (req, res)=>{
        controller.index(req,res);
    })
    app.post('/tasks/new', (req, res)=>{
        controller.newTask(req, res);
    })
    app.get('/:task_id/', (req, res)=>{
        controller.task(req,res);
    })
    app.put('/update/:task_id/', (req, res)=>{
        controller.updateTask(req,res);
    })
    app.delete('/remove/:task_id/', (req, res)=>{
        controller.removeTask(req,res);
    })
}