var inp = el('.p3 .p3_input')
inp.addEventListener('focus',function(){
	el('.editor').hide()
	this.style.top = '60vh'
})
inp.addEventListener('blur',function(){
	el('.editor').show()
	this.style.top = '42vh'
})

// p3()
function p3(){
	
	//显示编辑器
	el('.editor').show()
	let dialog_box = el('.p3 .dialog_box')
	let dialogs = [
		'今天我们来做一个密码锁！但是在做密码锁之前，我们需要学会一样东西，叫做变量。',
		'什么是变量呢？假设有一个输入框，有人在输入框里面写一些文字，你需要把这些文字存放起来，这就需要用到变量。',
		'所以变量的作用很简单，就是提供一个给你存放数据的空间。',
		'那么接下来我教教你，如何用变量记录下来输入框里面的内容。',
		'我们可以使用let定义一个变量，当然各种编程语言语法不一样。一般的格式都是 {关键字 变量名 = 变量值} 的方式来定义的。',
		'现在我告诉你,inp代表输入框对象，而inp.value则可以获得文本框里面的内容。你知道代码该怎样写吗？',
		'非常简单，只需要在编辑器输入 let \t ass = inp.value即可，txt就是你自己起的变量名。',
		'现在你在输入框随便写几个文字，然后在编辑器输入let \t ass = inp.value;\n alert(txt);\n 看一看会不会出现一个弹窗！'
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
