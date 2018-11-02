<script>
import config from './config'

export default {
	async created() {
		console.log(111111111)
		// 调用API从本地缓存中获取数据
		// const r = await get("/2018/07/gitLab-combined-with-jenkins-to-build-automated-deployment")
		// console.log(r)

		//
		// const logs = wx.getStorageSync('logs') || []
		// logs.unshift(Date.now())
		// wx.setStorageSync('logs', logs)
		//
		// console.log('app created and cache logs by setStorageSync')

		/*
		wx.request({
			url: config.host + '/api/tabZc/?v=1.2.21.17', //仅为示例，并非真实的接口地址
			method: "POST",
			data: {
				x: '',
				y: ''
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success(res) {
				console.log(res.data)
			}
		})*/

	}
}
</script>

<style>
.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 200rpx 0;
	box-sizing: border-box;
}

/* this rule will be remove */
* {
	transition: width 2s;
	-moz-transition: width 2s;
	-webkit-transition: width 2s;
	-o-transition: width 2s;
}

.btn {
	color: white;
	background: #EA5A49;
	margin-bottom: 10px;
	padding-left: 15px;
	border-radius: 2px;
	font-size: 16px;
	line-height: 40px;
	height: 40px;
	width: 100%;
}

.btn active {
	background: #FA5A49;
}
</style>
