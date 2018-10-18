//promise的写法，主要是为了防止js里异步回调写大量嵌套回调

function delay(word) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('hello' + word)
		}, 2000)
	})
}

delay('孙我空')
	.then((word) => {
		console.log(word)
		return delay("猪八戒")
	})
	.then((word) => {
		console.log(word)
		return delay('沙悟净')
	})
	.then((word) => {
		console.log(word)
	})