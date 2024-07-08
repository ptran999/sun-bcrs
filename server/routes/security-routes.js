
// Imports
const express = require('express');
const router = express.Router();
const {
  mongo
} = require('../utils/mongo');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let counter = 0;

// Routes
/**
 * employee Sign in
 * @openapi
 * /api/security/signin:
 *   post:
 *     tags:
 *      - Security
 *     description: API for signing in employees
 *     summary: Employee Sign in
 *     requestBody:
 *       description: Employee Information
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - emailAddress
 *               - password
 *             properties:
 *               emailAddress:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Employee Sign In Successfully
 *       '401':
 *         description: Invalid Credentials
 *       '500':
 *         description: Server Exception
 *       '501':
 *         description: MongoDB Exception
 */
router.post('/signin', (req, res, next) => {
  try {

    console.log("Employee singing in...");
    // Get the email address and password from the request body
    const {
      emailAddress,
      password
    } = req.body;

    // Call mongo and log in employee
    mongo(async db => {
      console.log("Looking up the employee...");
      // Find the employee
      const employee = await db.collection("employees").findOne({
        emailAddress: emailAddress
      });

      // If the employee is found; Then compare password passed in from the body with the password in the database
      if (employee) {
        console.log("Employee found!");
        console.log("Comparing passwords...");
        // Compare the password
        let passwordIsValid = bcrypt.compareSync(password, employee.password);

        // Else if the password doesn't match; then return status code 401 with message "Invalid credentials"
        if (!passwordIsValid) {
          const err = new Error('Unauthorized');
          err.status = 401;
          console.log('Invalid password for user', err);
          next(err);
        }
        // If the password matches; then return status code 200 with message "Employee sign in"
        console.log("Password matches!");
        res.send(employee);
      }
    }, next);

    // Catch any Database errors
  } catch (err) {
    console.error("Error: ", err);
    next(err);
  }
});

// Export the router
module.exports = router