// guide()
function guide(){
//对话页流程
const dialogs = [
	'你好呀，我叫小明。我有一个人工智能朋友叫小智。让它和你打个招呼吧！',
	'你好呀，我是小智，来自2099年的超级人工智能机器人。\n 听说你想学编程？',
	'对呀，这件事真的是太酷了，那么我们该从哪里开始呢？',
	'那你可算是问对人了！遇到我会让你学编程变得非常简单。嗯...就从你外公的农场开始吧！',
	'我外公的农场？你在卖什么关子...',
	'嘿嘿，等着瞧吧！'
	]
const dialog_box = el('.guide .dialog_box')
dialog_box.addEventListener('click',function(){
	print(dialog_box)
})
//用来记录是小明还是小智
let dialog_i = 0
//防止文字未打完点击屏幕
let dialog_flag = true

print(dialog_box)
function print(dom){
	if(!dialog_flag){
		console.log('不能重复点击');
		return
	}
	dialog_flag = false
	
	//来回展现小明与小智
	if(dialog_i % 2 == 0){
		el('.guide .ming').show()
		el('.guide .zhi').hide()
	}else{
		el('.guide .ming').hide()
		el('.guide .zhi').show()
	}
	//打字机效果
	let txt = dialogs[dialog_i]
	dom.innerText = ''
	let timer_i = 0
	let timer = setInterval(()=>{
		if(timer_i >= txt.length-1) {
			//结束
			if(dialog_i == dialogs.length-1){
				setTimeout(()=>{
					nextPage(2)
				},2000)
				clearInterval(timer)
				return
			}
			clearInterval(timer)
			//允许再次点击
			dialog_flag = true
			dialog_i++
			}
		dom.innerText += txt[timer_i]
		timer_i++
	},100)
}
}