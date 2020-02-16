import axios from 'axios'
import { Toast } from 'antd-mobile'

// Use axiox to intercept request and response 

// block every request
axios.interceptors.request.use(function(config){
	Toast.loading('Loading',0)
	return config
})

// block response (eliminate the toast when the loading is done)

axios.interceptors.response.use(function(config){
	Toast.hide()
	return config
})