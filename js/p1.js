// p1()
function p1(){
const p1_dialog_box = el('.p1 .dialog_box')

const dialogs = [
	'哎哟！小明来啦！你不是放假了吗，一起来帮外公建设农场吧！',
	'没问题，这件事让我小智来帮忙!\n外公你说需要做什么？',
	'我的农场需要一个告示牌，在上面写警示语，提醒别人不要踩到我的花儿。',
	'好说好说，这件事包在我身上！小明，让我们开始吧！!'
	]
const dialog_box = el('.p1 .dialog_box')
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
	
	if(dialog_i % 2 == 0){
		el('.p1 .waigong').show()
		el('.p1 .zhi').hide()
	}else{
		el('.p1 .waigong').hide()
		el('.p1 .zhi').show()
	}
	
	//打字机效果
	let txt = dialogs[dialog_i]
	dom.innerText = ''
	let timer_i = 0
	let timer = setInterval(()=>{
		if(timer_i >= txt.length-1) {
			//结束
			if(dialog_i == dialogs.length-1){
				setTimeout(function(){
					nextPage(3)
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