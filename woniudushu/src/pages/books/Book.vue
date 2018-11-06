<template>
<div>
	<!-- <img src="http://cbc-sdk-web.dopool.com//imgdata/old_data/longmenfeijia.jpg"></img> -->
	<!-- <div :key='book.id' v-for="book in books">
		{{book.title}}
	</div> -->
	<TopSwiper :tops='tops'></TopSwiper>
	<BookCard :key='book.id' v-for='book in books' :book='book'></BookCard>
	<p class='text-footer' v-if='!more'>
		没有更多数据
	</p>
</div>
</template>

<script>
import {
	get
} from '@/util'
import BookCard from '@/components/BookCard'
import TopSwiper from '@/components/TopSwiper'

export default {
	components: {
		BookCard,
		TopSwiper
	},
	data() {
		return {
			books: [],
			page: 0,
			more: true,
			tops: []
		}
	},
	// created() {
	// 	console.log('books created...')
	// }

	methods: {
		async getBooks(init) {
			if (init) {
				this.page = 0
				this.more = true
			}
			wx.showNavigationBarLoading()
			const bookList = await get('/weapp/booklist', {
				page: this.page
			})
			console.log(bookList.data.list)
			if (bookList.data.list.length < 10 && this.page > 0) {
				this.more = false
			}
			if (init) {
				this.books = bookList.data.list
			} else {
				this.books = this.books.concat(bookList.data.list)
			}
			wx.stopPullDownRefresh()
			wx.hideNavigationBarLoading()
		},
		async getTops() {
			const tops = await get('/weapp/booktop')
			this.tops = tops.data.list
		}
	},
	onReachBottom() {
		if (!this.more) {
			return false
		} else {
			this.page = this.page + 1
			this.getBooks()
		}
	},
	onPullDownRefresh() {
		this.getBooks(true)
		this.getTops()
	},
	mounted() {
		this.getBooks(true)
		this.getTops()
	}
}
</script>

<style>
</style>
