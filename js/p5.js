
function cow(){
	let rand = Math.random()
	
	let cows = document.createElement('img')
	cows.className = 'p5_cow'
	cows.src = './img/public/奶牛.png'
	cows.style.top = Math.floor(Math.random()*30+60)+'vh'
	cows.style.left = Math.floor(Math.random()*100)+'vw'
	if(rand>0.5){
		cows.style.transform = 'rotateY(180deg)'
	}
	el('.p5').appendChild(cows)
	cows.timer = setInterval(function(){
		cows.style.left = Math.floor(Math.random()*100)+'vw'
	},6000)
}

// p5()
function p5(){
	
	//显示编辑器
	el('.editor').show()
	el('.editor button').show()
	el('.editor').style.opacity = '0.5'
	let dialog_box = el('.p5 .dialog_box')
	let dialogs = [
		'掌握得挺快嘛！那么今天我们继续来学习一个新东西，叫做循环。',
		'所谓循环，就是循环执行代码，它可以帮你重复做很多事情，让我们直接来举例子。',
		'现在你需要帮外公牵几头奶牛过来吃草，cow()可以帮你牵一头奶牛过来，在编辑器输入试一下。',
		'所以问题就出现了，如果我们想要多牵几头，就要重复编写代码，这时候可以用到循环解决。',
		'常规的for循环写法是这样的，for(let[空格]i = 0;i<100;i++){},这样大括号里面的代码就可以循环执行100次。',
		'如此说来，你试着在大括号里面加入cow()看看效果吧！']
	
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