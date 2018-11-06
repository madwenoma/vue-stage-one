const {
	mysql
} = require('../qcloud')

module.exports = async (ctx) => {
	const {
		page
	} = ctx.request.query //大括号必须写
	console.log("page ...." + page)
	const size = 10
	const books = await mysql('books').select('books.*', 'cSessionInfo.user_info')
		.join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id').limit(size).offset(Number(page) * size)
	//.orderBy('id','desc')
	console.log(books)
	// ctx.state.data = {
	// 	list: books
	// }
	ctx.state.data = {
		list: books.map(v => {
			const info = JSON.parse(v.user_info)
			return Object.assign({}, v, {
				user_info: {
					nickName: info.nickName
				}
			})
		})
	}
}