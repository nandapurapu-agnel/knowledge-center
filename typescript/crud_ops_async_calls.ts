import express from 'express';
import bodyParser from 'body-parser'
const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


const router = express.Router();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`${id} deleted successfully from database`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { first_name, last_name, email } = req.body;

    const user = users.find((user) => user.id === id)

    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (email) user.email = email;

    res.send(`User with the ${id} has been updated`)

});


