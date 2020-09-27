const axios = require('axios');
const url = `https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec`;

class Slots{
    get(){
        return axios.get(url);
    }
}

module.exports = Slots;