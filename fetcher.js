const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
const url = input[0];
const path = input[1];
console.log(url, path)

request(`${url}`, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(`${path}`, body, (err) => {
    if (err) {
      console.error("error", err);
    } else {
      // console.log(response.headers)
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});




