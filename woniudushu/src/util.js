import config from "./config.js"

export function get(url) {
	return new Promise((resolve, reject) => {
		console.log(config.host)
		wx.request({
			url: config.host + url,
			success: function(res) {
				// console.log(res.data)

				if (res.statusCode == 200) {
					resolve(res.data)
				} else {
					reject(res)
				}
			}
		})

		// wx.request({
		//     url: config.host + '/api/tabZc/?v=1.2.21.17', //仅为示例，并非真实的接口地址
		//     method: "POST",
		//     data: {
		//         x: '',
		//         y: ''
		//     },
		//     header: {
		//         'content-type': 'application/json' // 默认值
		//     },
		//     success(res) {
		//         console.log(res.data)
		//     }
		// })

	})
}

export function showSuccess(text) {
	wx.showModal({
		title: text,
		// content: 'success content',
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