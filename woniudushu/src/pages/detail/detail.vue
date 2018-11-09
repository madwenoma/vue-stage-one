<template>
<div>
	<BookInfo :book="book"></BookInfo>
	<div class="comment">
		<textarea v-model='comment'
              class='textarea'
              :maxlength='100'
              placeholder='请输入图书短评'></textarea>
		<div class='location'>
			地理位置：
			<switch color='#EA5A49' :checked='location' @change='getGeo'></switch>
			<span class='text-primary'>{{location}}</span>
		</div>
		<div class='phone'>
			手机型号：
			<switch color='#EA5A49' :checked='phone' @change='getPhone'></switch>
			<span class='text-primary'>{{phone}}</span>
		</div>
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
			book: {},
			phone: '',
			location: ''
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
		},
		getGeo() {

		},
		getPhone(e) {
			if (e.target.value) {
				const phoneInfo = wx.getSystemInfoSync()
				console.log(phoneInfo)
				this.phone = phoneInfo.model
			} else {
				this.phone = ''
			}
		}
	},
	mounted() {
		this.bookid = this.$root.$mp.query.id //mpvue获取小程序页面跳转传递过来的参数的写法
		this.getBookDetail()
	}
}
</script>

<style lang='scss'>
.comment {
    margin-top: 10px;
    .textarea {
        width: 730rpx;
        height: 200rpx;
        background: #eee;
        padding: 10rpx;
    }
    .location {
        margin-top: 10px;
        padding: 5px 10px;
    }
    .phone {
        margin-top: 10px;
        padding: 5px 10px;
    }
}
</style>
