const https = require('https')
const {
	mysql
} = require('../qcloud')

module.exports = async (ctx) => {
	console.log(222222222222)
	const {
		isbn,
		openid
	} = ctx.request.body

	const existBooks = await mysql('books').select().where('isbn', isbn)
	if (existBooks.length) {
		ctx.state = {
			code: -1,
			data: {
				msg: '图书已存在'
			}
		}
		return
	}

	if (isbn && openid) {
		const url = 'https://api.douban.com/v2/book/isbn/' + isbn
		const bookInfo = await getJSON(url)
		console.log(bookInfo)
		const rate = bookInfo.rating.average
		const {
			title,
			image,
			alt,
			publisher,
			summary,
			price
		} = bookInfo

		const tags = bookInfo.tags.map(v => {
			return `${v.title} ${v.count}`
		}).join(',')
		const author = bookInfo.author.join(',')
		try {
			await mysql('books').insert({
				isbn,
				openid,
				rate,
				title,
				image,
				alt,
				publisher,
				summary,
				price,
				tags,
				author
			})
			ctx.state.data = {
				title,
				msg: 'success'
			}
		} catch (e) {
			ctx.state = {
				code: -1,
				data: {
					msg: '新增失败:' + e.sqlMessage
				}
			}
		}

	}
}

function getJSON(url) {
	return new Promise((resolve, reject) => {
		https.get(url, res => {
			let urlData = ''
			res.on('data', data => {
				urlData += data
			})
			res.on('end', data => {
				const bookInfo = JSON.parse(urlData)
				if (bookInfo.title) {
					resolve(bookInfo)
				}
				reject(bookInfo)
			})
		})
	})
}

// module.exports = async (ctx) => {
// 	console.log(222)
// 	return 'hehe'
// }