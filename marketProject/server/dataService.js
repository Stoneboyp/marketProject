const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const addDataToFile = (fileName, newData) => {
  const filePath = `./data/${fileName}.json`;
  const data = require(filePath);
  const id = uuidv4();
  newData.id = id;
  data.data.push(newData);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing ${fileName} data:`, error.message);
    return false;
  }
  return true;
};

const deleteDataFromFile = (fileName, id) => {
  const filePath = `./data/${fileName}.json`;
  const data = require(filePath);
  const index = data.data.findIndex((item) => item.id === id);
  if (index === -1) return null;
  data.data.splice(index, 1);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing ${fileName} data:`, error.message);
    return false;
  }
  return true;
};

module.exports = { addDataToFile, deleteDataFromFile };
