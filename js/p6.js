el('.p6 .jiwo').addEventListener('click',function(){
	alert(this.classList)
})
el('.p6 .jidan').addEventListener('click',function(){
	alert(this.classList)
})
function p6(){
	
	//显示编辑器
	el('.editor').show()
	el('.editor').style.opacity = '0.7'
	let dialog_box = el('.p6 .dialog_box')
	let dialogs = ['现在你对编程应该有了一个最基本的认识啦！今天让我们来自由发挥，用你的代码，把鸡窝放到地上，把鸡蛋放到鸡窝里！！',
	'点击元素可以显示对象名哦！']
	
	let dialogs_i = 0
	let timer_i = 0
	let timer_flag = false
	let timer = setInterval(function(){
		if(timer_flag) return
		
		let txt = dialogs[dialogs_i]
		if(timer_i >= txt.length-1){
			if(dialogs_i>=dialogs.length-1) {
				clearInterval(timer)
				setTimeout(()=>{
					el('.p6 .zhis').hide()
				},5000)
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