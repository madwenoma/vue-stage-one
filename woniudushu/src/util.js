import config from "./config.js"

// export function get(url) {
// 	return new Promise((resolve, reject) => {
// 		console.log(config.host)
// 		wx.request({
// 			url: config.host + url,
// 			success: function(res) {
// 				// console.log(res.data)
// 				if (res.statusCode == 200) {
// 					resolve(res.data)
// 				} else {
// 					reject(res)
// 				}
// 			}
// 		})
// 	})
// }
export function get(url, data) {
	return req(url, 'GET', data)
}
export function post(url, data) {
	return req(url, 'POST', data)
}

function req(url, method, data) {
	return new Promise((resolve, reject) => {
		wx.request({
			url: config.host + url,
			method,
			data,
			//     header: {
			//         'content-type': 'application/json' // 默认值
			//     },
			success: function(res) {
				if (res.data.code == 0) {
					resolve(res.data)
				} else {
					showModal('失败', res.data.data.msg)
					reject(res)
				}
			}
		})
	})
}

export function showModal(title, content) {
	wx.showModal({
		title,
		content,
		showCancel: false
	})
}

export function showSuccess(text, content) {
	wx.showModal({
		title: text,
		content: content,
		icon: 'success',
		success(res) {
			if (res.confirm) {
				console.log('用户点击确定')
			} else if (res.cancel) {
				console.log('用户点击取消')
			}
		}
	})
}