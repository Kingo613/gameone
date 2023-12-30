const el = (dom) => document.querySelector(dom)
const els = (dom) => document.querySelectorAll(dom)
Element.prototype.show = function(){this.style.display = 'block'}
Element.prototype.hide = function(){this.style.display = 'none'}

//editor
el('.editor button').addEventListener('click',function(){
	let code = el('.editor .code').value
	let script = document.createElement('script')
	script.innerText = code
	document.body.appendChild(script)
	script.remove()
})




//p1

