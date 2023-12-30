//翻页框架实现
var pageIndex = 0
// nextPage(6)
function nextPage(num){
	el('.editor .code').value = ''
	switch(num){
		case 0:
			turnPage(0)
			el('.editor').hide()
			pageIndex = 0
		break;
		
		case 1:
			turnPage(1)
			guide()
			pageIndex = 1
		break;
		
		case 2:
			turnPage(2)
			p1()
			pageIndex = 2
		break;
		
		case 3:
			turnPage(3)
			p2()
			pageIndex = 3
		break;
		
		case 4:
			turnPage(4)
			p3()
			pageIndex = 4
		break;
		
		case 5:
			turnPage(5)
			p4()
			pageIndex = 5
		break;
		
		case 6:
			turnPage(6)
			p5()
			pageIndex = 6
		break;
		
		case 7:
			turnPage(7)
			p6()
			pageIndex = 7
		break;
	}
	
}




function turnPage(num){
	let pages = els('.page')
	
	setTimeout(()=>{
		//隐藏所有页
		// pages.forEach(v=>{
		// 	v.classList.remove('show')
		// })
		
		pages[pageIndex!=0?pageIndex-1:7].classList.remove('show')
	},700)
	//显示num页
	pages[num].classList.add('show')
	

	
	pages[num].animate({
		opacity:[0,1]
	},{
		duration:700,
		fill:"forwards"
	})
	
	pages[pageIndex].animate({
		opacity:[1,0]
	},{
		duration:700
	})
	
	
	

	
	
}