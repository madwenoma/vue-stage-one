const {
	mysql
} = require('../qcloud')

module.exports = async (ctx) => {
	const {
		id
	} = ctx.request.query //大括号必须写
	console.log("bookid ...." + id)

	const result = await mysql('books').select('books.*', 'cSessionInfo.user_info')
		.join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id').where('id', id).first()
	console.log(result)
	const info = JSON.parse(result.user_info)
	ctx.state.data = Object.assign({}, result, {
		tags: result.tags.split(','),
		summary: result.summary.split('\n'),
		user_info: {
			name: info.nickName,
			avatar: info.avatarUrl
		}
	})

	mysql('books').where('id', id).increment('count', 1)
}