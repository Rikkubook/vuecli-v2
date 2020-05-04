'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //環境變數大寫，因要在仔入到vue內如果是字串內部要在加“”
  //有修改要重啟環境
})

//常搭配Ajax 運用 在Vue內
