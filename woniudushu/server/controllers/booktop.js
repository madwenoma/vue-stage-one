const {
	mysql
} = require('../qcloud')

module.exports = async (ctx) => {
	const topBooks = await mysql('books').select('id', 'title', 'image', 'count').orderBy('count', 'desc').limit(9)
	// console.log(book)
	ctx.state.data = {
		list: topBooks
	}
}