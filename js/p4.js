var passw = el('.p4_input')

function open(){
	el('.p4 .door .right').style.transform = 'translateX(50vw)'
	setTimeout(()=>{
		el('.p4 .door .right').style.transform = 'translateX(0vw)'
	},3000)
}
//开门按钮事件
el('.p4_inpBox button').addEventListener('click',function(){
	eval(el('.editor .code').value)
	
})

// p4()
function p4(){
	
	//显示编辑器
	el('.editor').show()
	el('.editor button').hide()
	let dialog_box = el('.p4 .dialog_box')
	let dialogs = [
		'那现在我们正式来做密码锁！第一步，我们要使用一个非常实用的工具，那就是条件判断。',
		'所谓条件判断，就是判断条件是否成立的问题。比如说需要输入正确的密码，才能打开门。',
		'那么事情就很简单了，只需要获取输入框的密码，然后判断密码是否正确即可！',
		'代码如下：let[空格]ps = passw.value;\n if(ps==\'123456\')\n{open()}else{alert(\'密码错误，不许进入\')};,其中,open就是开门的意思。']
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
