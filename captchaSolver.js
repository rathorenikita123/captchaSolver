const tesseract = require("tesseract.js");

tesseract
  .recognize("./sample2.jpg", "eng", { logger: (m) => console.log(m) })
  .then(({ data: { text } }) => {
    console.log(text);
  })
  .catch((err) => console.error(err));
