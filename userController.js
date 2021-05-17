const Users = require("./userModel");
const { failed, success, isFalsyValue } = require("./utils");

const bcrypt = require("bcrypt");

const saltRounds = 10;

const addUser = async (req, res) => {
  try {
    const { body } = req;

    const hash = await bcrypt.hash(body.password, saltRounds);

    const newUser = new Users({ ...body, password: hash });
    const user = await newUser.save();

    if (isFalsyValue(user)) {
      throw error;
    }

    const response = success({ data: user });
    res.status(201).send(response);
  } catch (error) {
    const response = failed({ error });
    res.status(400).send(response);
  }
};

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await Users.find({ email });
    user = user[0];

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new Error("Authentication Failed");
    }

    const response = success({ data: user });
    res.status(201).send(response);
  } catch (error) {
    const response = failed({ error });
    res.status(400).send(response);
  }
};

module.exports = {
  addUser,
  getUser,
};
