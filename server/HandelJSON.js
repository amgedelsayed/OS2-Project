const fs = require("fs").promises;
const path = require("path");
class HandelJSON {
  #jsondir = "";
  constructor(jsondir) {
    this.#jsondir = jsondir;
  }
  async get() {
    try {
      const data = await fs.readFile(this.#jsondir, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async set(object) {
    try {
      const jsonData = JSON.stringify(object, null, 2);
      await fs.writeFile(this.#jsondir, jsonData, "utf-8");
      return object;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
module.exports = HandelJSON;
