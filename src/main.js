let html = document.querySelector("#html")
let style = document.querySelector("#style")

let string = `/*你好，我是冰冻雀巢咖啡
 *我是一名前端小白，接下来我要展示我的前端功底
 *首先我要准备一个div
 **/

 #div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/*
 *接下来我把 div 变成一个八卦图
 *首先我要将div变成圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}

/*
我要开始将圆变成八卦图
首先加一黑一白
**/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
加个阴阳进去
*/
#div1::before{
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let string2 = ''

let n = 0
let step = () => {
    setTimeout(() => {
        if(n < string.length){
            // 解决字符'<'先出现的问题
            if (string[n] === "\n"){//如果遇到回车转直接换成html的<br>标签
                string2 += "<br>"
            } else if(string[n] === " "){ //将js里的tab换成html的tab &nbsp
                string2 += "&nbsp"
            }
            else{
                string2 += string[n]
            }
            
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n) //CSS里不用打印所以看不出来'<'先出现的问题   
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)

        n += 1
        step() 
        } 
    }, 50)
}
    
step()