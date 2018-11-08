<template>
<div>
	<BookInfo :book="book"></BookInfo>
</div>
</template>
<script>
import {
	get
} from "@/util"

import BookInfo from "@/components/BookInfo"

export default {
	data() {
		return {
			bookid: '',
			book: {}
		}
	},
	components: {
		BookInfo
	},
	methods: {
		async getBookDetail() {
			const bookRsp = await get('/weapp/bookdetail', {
				id: this.bookid
			})
			console.log(bookRsp.data)
			this.book = bookRsp.data
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
