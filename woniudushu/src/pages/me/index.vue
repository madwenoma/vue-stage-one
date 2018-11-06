<template>
<div class="container">
	<div class="userinfo" @click="login">
		<img :src="userinfo.avatarUrl" alt="" />
		<p>
			{{userinfo.nickName}}
		</p>
	</div>
	<YearProgress></YearProgress>
	<button v-if="userinfo.openId" @click="scanBook" class="btn">添加图书</button>
</div>
</template>

<script>
// import YearProgress from '../../components/YearProgress'
import YearProgress from '@/components/YearProgress' //src下的组件目录直接用@引入不需要写路径了
import qcloud from "wafer2-client-sdk"
import config from '@/config'
import {
	post,
	showSuccess
} from "@/util"

export default {
	data() {
		return {
			userinfo: {
				avatarUrl: "../../../static/img/unlogin.png",
				nickName: "点击登录"
			}
		}
	},

	components: {
		YearProgress
	},

	created() {
		console.log('me created...')

	},

	methods: {
		async addBook(isbn) {
			// const res = await post(config.host + '/addbook', {
			const res = await post('/weapp/addbook', {
				isbn,
				openid: this.userinfo.openId
			})
			if (res.code == 0 && res.data.title) {
				showSuccess('添加成功', `${res.data.title}添加成功`)
			}
		},
		scanBook() {
			// 允许从相机和相册扫码
			wx.scanCode({
				success: (res) => {
					console.log(res)
					this.addBook(res.result)
				}
			})
		},
		login() {
			console.log("login exec...")
			// 设置登录地址
			let userinfo = wx.getStorageSync('userinfo')
			const self = this
			if (!userinfo) {
				qcloud.setLoginUrl(config.loginUrl);
				qcloud.login({
					success: function(userinfo) {
						console.log('登录成功', userinfo);
						showSuccess('登录成功');
						wx.setStorageSync('userinfo', userinfo);
						self.userinfo = userinfo
					},
					fail: function(err) {
						console.log('登录失败', err);
					}
				});
			}
		}
	},

	onShow() {
		let userinfo = wx.getStorageSync('userinfo')
		if (userinfo) {
			this.userinfo = userinfo
		}
	}
}
</script>

<style>
.container {
	padding: 0 30px;
}

.userinfo {
	margin-top: 100px;
	text-align: center;
}

img {
	width: 150rpx;
	height: 150rpx;
	margin: 20rpx;
	border-radius: 50%;
}
</style>
