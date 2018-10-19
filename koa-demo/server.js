const Koa = require('koa')
const koaLog = require('./koa-logger')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
//koa 路由的用法
router.get('/', (ctx, next) => {
	ctx.body = "sunwukong.."
})
router.get('/zhubajie', (ctx, next) => {
	ctx.body = "猪八戒.."
})

app.use(koaLog)

app.use(router.routes())
app.use(router.allowedMethods())

//P19 4-4
// app.use(async (ctx, next) => {
// 	if (ctx.request.url == '/') {
// 		ctx.body = "齐天大圣孙悟空"
// 	} else if (ctx.request.url == '/zhubajie') {
// 		ctx.body = "猪八戒"
// 	} else {
// 		ctx.body = "<h1>404 NOT FOUND</h1>"
// 	}
// })


/* P16 4-1
function delay() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 1000)
	})
}

app.use(async (ctx, next) => {
	ctx.body = '1'
	next()
	ctx.body += '2'
})

app.use(async (ctx, next) => {
	ctx.body += '3'
	// await delay() //用await关键字可用于控制next是否等待 写法 await next() ，都加上await就是顺序等待执行
	next()
	ctx.body += '4'
})
app.use(async (ctx, next) => {
	ctx.body += '5'
	next()
	ctx.body += '6'
})
*/
app.listen(3000)