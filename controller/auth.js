const login = (req, res) => {
  const { username, password } = req.body;
  if (username === "Ajal" && password === "123") {
    res.status(200).json({ message: `Welcome to homepage ${username}` });
  } else {
    res.status(401).json({ message: `Invalid  Credentials` });
  }
};

module.exports = { login };
