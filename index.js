const express = require('express');
const text = require('./text');

const app = express();
app.use(express.json());

app.post('/lowercase', (req, res) => {
    const {action, input} = req.body;
    const output = input.toLowerCase();
    const result = {
        action: "lowercase",
        input,
        output: output,
      }

      res.json(result);
});


app.post('/uppercase', (req, res) => {
    const {action, input} = req.body;
    const output = input.toUpperCase();
    const result = {
        action: "uppercase",
        input,
        output: output,
      };
        
  res.json(result);
});


app.listen(3000);




