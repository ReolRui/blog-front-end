"use strict";

import Vue from 'vue';
import axios from "axios";
var qs = require('qs');

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true
let config = {
  baseURL: "http://www.liuxiaogu.cn:3000",
  //baseURL: "http://119.29.177.240:3000",
  //baseURL: "http://localhost:3000",
  timeout: 60 * 1000, // Timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },


  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    //console.log(config.baseURL + config.url)
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    //console.log(response)


    // Do something with response data
    return response;
  },
  function (error) {

    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;