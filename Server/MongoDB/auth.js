const router = require("express").Router();
const User = require('./User')

//REGISTER
router.post("/register", async (req, res) => {
    try {
      //generate new password
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      //create new user
      const newUser = new User(req.body);
  
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  module.exports = router;
