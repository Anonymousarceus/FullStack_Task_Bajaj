const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const FULL_NAME = akshatmishra;
const DOB = 28122003;
const EMAIL = akshatmishra2022@vitbhopal.ac.in;
const ROLL_NUMBER = 22BCE10217 ;
const PORT = 3000;



function isNumber(str) {
    return /^\d+$/.test(str);
}
function isAlpha(str) {
    return /^[a-zA-Z]$/.test(str);
}
function alternatingCaps(str) {
    let res = '';
    let up = true;
    for (let c of str) {
        res += up ? c.toUpperCase() : c.toLowerCase();
        up = !up;
    }
    return res;
}

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        if (!Array.isArray(data)) throw new Error('data must be an array');
        let even_numbers = [];
        let odd_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;

        for (const item of data) {
            if (isNumber(item)) {
                const n = parseInt(item);
                if (n % 2 === 0) even_numbers.push(item);
                else odd_numbers.push(item);
                sum += n;
            } else if (isAlpha(item)) {
                alphabets.push(item.toUpperCase());
            } else {
                special_characters.push(item);
            }
        }

        
        const letters = data.filter(isAlpha);
        const concat_str = alternatingCaps(letters.reverse().join(''));

        res.status(200).json({
            is_success: true,
            user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string: concat_str
        });
    } catch (e) {
        res.status(400).json({
            is_success: false,
            user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            error: e.message
        });
    }
});

module.exports = app;


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}.`);
    });
}
