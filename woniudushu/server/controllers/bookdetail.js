const {
	mysql
} = require('../qcloud')

module.exports = async (ctx) => {
	const {
		id
	} = ctx.request.query //大括号必须写
	console.log("bookid ...." + id)

	const book = await mysql('books').select('id', 'title', 'image').where('id', id).increment('count', 1)
	// console.log(book)
	// ctx.state.data = {
	// 	book: book
	// }
}