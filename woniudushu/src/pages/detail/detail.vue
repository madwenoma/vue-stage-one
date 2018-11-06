<template>
<div>图书:{{bookid}}</div>
</template>
<script>
import {
	get
} from "@/util"

export default {
	data() {
		return {
			bookid: ''
		}
	},
	methods: {
		async getBookDetail() {
			const bookRsp = await get('/weapp/bookdetail', {
				id: this.bookid
			})
			console.log(bookRsp)
		}
	},
	mounted() {
		this.bookid = this.$root.$mp.query.id //mpvue获取小程序页面跳转传递过来的参数的写法
		this.getBookDetail()
	}
}
</script>

<style>
</style>
