const app = require("./app").app;
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
