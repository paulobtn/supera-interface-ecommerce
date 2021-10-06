const app = require('./app.js');

const PORT = 3001;


console.log(process.cwd());

app().listen(PORT, () => {
    console.log('Escutando na porta', PORT);
});
