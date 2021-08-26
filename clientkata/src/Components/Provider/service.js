const axios = require('axios');

export async function getItems() {
  try {
    const response = await axios.get("https://localhost:44388/product/")
    return response
  } catch (error) {
    console.error(error);
  }
}