// todos controller

const getTodos = (req, res) => {
  res.json([
    { id: 1, text: "Learn Node.js" },
    { id: 2, text: "Learn Express.js" },
    { id: 3, text: "Learn MongoDB" },
    { id: 4, text: "Learn React.js" },
  ]);
};



module.exports = { getTodos };
