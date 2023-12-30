var billboard = el('.p2 .billboard .txt')
billboard.setText = function(txt){
	this.innerText = txt
}
// p2()
function p2(){
	//显示编辑器
	el('.editor').show()
	let dialog_box = el('.p2 .dialog_box')
	let dialogs = [
		'现在给你一个编辑器，你可以在里面编写代码，来控制告示牌里面的内容。',
		'那么我们应该怎样编写代码呢？',
		'答案非常简单，首先我们需要一个对象，对象是什么？当然是告示牌了！所以直接在输入框输入billboard。',
		'当然还没完，我们有了对象还要操控它的属性，现在我告诉你setText()可以更改它的内容，你知道怎样写吗？',
		'这还不简单？完整的代码应该是billboard.setText(\'你想说的话\'),赶紧写下来点击运行试试吧！!'
	]
	let dialogs_i = 0
	let timer_i = 0
	let timer_flag = false
	let timer = setInterval(function(){
		if(timer_flag) return
		
		let txt = dialogs[dialogs_i]
		if(timer_i >= txt.length-1){
			if(dialogs_i>=dialogs.length-1) {
				clearInterval(timer)
				return
			}
			timer_flag = true
			setTimeout(function(){
				timer_flag = false
				dialog_box.innerText = ''
				dialogs_i++
				timer_i = 0
			},2000)
			
		}
		dialog_box.innerText+=txt[timer_i]
		timer_i++
		
	},100)
}
