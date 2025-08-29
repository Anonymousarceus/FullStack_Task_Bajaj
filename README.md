# Bajaj API

This project is a simple Express.js API for processing arrays of data and returning structured results. Below is an overview of the main functions and their purposes:

## Main Functions

### 1. `isNumber(str)`
Checks if a string contains only digits.
- **Input:** String
- **Output:** Boolean
- **Usage:** Used to identify numbers in the input array.

### 2. `isAlpha(str)`
Checks if a string is a single alphabet character (A-Z or a-z).
- **Input:** String
- **Output:** Boolean
- **Usage:** Used to identify alphabetic characters in the input array.

### 3. `alternatingCaps(str)`
Converts a string so that its characters alternate between uppercase and lowercase, starting with uppercase.
- **Input:** String
- **Output:** String
- **Usage:** Used to create a special concatenated string from the input data.

## API Endpoint

### `POST /bfhl`
Processes an array of data sent in the request body and returns:
- Odd numbers
- Even numbers
- Alphabets (converted to uppercase)
- Special characters
- Sum of all numbers
- Concatenated string of all letters (reversed, alternating caps)
- User details (name, DOB, email, roll number)

#### Example Request
```json
{
  "data": ["1", "2", "a", "b", "@"]
}
```

#### Example Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["2"],
  "alphabets": ["A", "B"],
  "special_characters": ["@"],
  "sum": "3",
  "concat_string": "Ba"
}
```

## Error Handling
If the input is invalid (e.g., `data` is not an array), the API returns a 400 error with details.

## Running the App
1. Install dependencies: `npm install express`
2. Start the server: `node app.js`

---
Feel free to modify the user details at the top of `app.js` as needed.
