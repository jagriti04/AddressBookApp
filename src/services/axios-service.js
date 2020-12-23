const axios = require("axios").default;

class AxiosService {

  getAPIService(url) {
    return axios.get(url);
  }

  postService(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: data
    })
  }
}

module.exports = new AxiosService();
