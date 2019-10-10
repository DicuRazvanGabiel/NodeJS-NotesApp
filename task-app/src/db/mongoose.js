const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },

    age: {
        type: Number
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },

    completed: {
        type: Boolean
    }
});

const task1 = new Task({
    description: 'First task',
    completed: false
})

task1.save().then(() => {
    console.log(task1);
    
}).catch((error) => {
    console.log(error);
    
})

// const me = new User({
//     name: 'Razvan',
//     age: 22
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error);
// });