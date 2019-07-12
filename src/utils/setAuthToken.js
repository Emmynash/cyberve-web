const axios = require('axios');

const setAUthToken = token => {
    if (token) {
        // set token to every request if logged in
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

module.exports = setAUthToken;