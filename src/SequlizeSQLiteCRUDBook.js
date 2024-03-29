// Description: Node Express REST API with Sequelize and SQLite CRUD Book
//npm install express sequelize sqlite3
//
//Run this file with node SequilizeSQLiteCRUDBook.js
// Test with Postman

const express = require ('express');
const Sequelize = require( 'sequelize');
const app = express();

// parse incoming requests
app.use (express.json());

// create a connection to the database
const sequelize = new Sequelize('database', 'username', 'password', {
 host: 'localhost',
 dialect: 'sqlite',
 storage: './Database/SQBooks.sqlite'
});

//
const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//
sequelize.sync();

//
app.get('/books', (req, res) => {
    Book.findAll().then(books => {
        res.json(books);
    }).catch(err =>{
        res.status(500).send(err);
    });
});

//
app.get('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if(!book) {
            res.status(404).send('Book not found');
        } else {
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//
app.post('/books',(req,res) => {
    Book.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//
app.put('/Books/:id', (req,res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        }else {
            book.update(req.body).then(() => {
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//
app.delete('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if(!book) {
            res.status(404).send('Book not found');
        }else {
            book.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

////////////////////////////////////

const Book1 = sequelize.define('v2', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


app.get('/books1', (req, res) => {
    Book1.findAll().then(books => {
        res.json(books);
    }).catch(err =>{
        res.status(500).send(err);
    });
});

//
app.get('/books1/:id', (req, res) => {
    Book1.findByPk(req.params.id).then(book => {
        if(!book) {
            res.status(404).send('Book not found');
        } else {
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//
app.post('/books1',(req,res) => {
    Book1.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//
app.put('/Books1/:id', (req,res) => {
    Book1.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        }else {
            book.update(req.body).then(() => {
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//
app.delete('/books1/:id', (req, res) => {
    Book1.findByPk(req.params.id).then(book => {
        if(!book) {
            res.status(404).send('Book not found');
        }else {
            book.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});













//
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));