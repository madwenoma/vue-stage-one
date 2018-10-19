//P17 4-2
//promise的写法，主要是为了防止js里异步回调写大量嵌套回调,如：
/*

有个ajax是异步调用网络，调用如果需要很多层就会有如下代码，很恶心
ajax(()=>{
    console.log(xx)
    ajax(()=>{
        console.log(2)
        ajax(()=>{
            console.log(3)
            ajax(()=>{
                console.log(4)
                ajax(()=> {
                    ajax...
                })
            })
        })
    })
})
*/

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