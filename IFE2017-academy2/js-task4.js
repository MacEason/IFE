/* 
* @Author: anchen
* @Date:   2017-09-19 12:47:52
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-19 17:58:10
*/

//绑定变量
var numtxt = document.getElementById("numtxt");
var show = document.getElementById("show");
var leftIn = document.getElementById("leftIn");
var leftOut = document.getElementById("leftOut");
var rightIn = document.getElementById("rightIn");
var rightOut = document.getElementById("rightOut");
//插入数字
function insertnum(addfrom){
    if(numtxt.value == ""){
        alert("输入内容为空");
    }
    else if(isNaN(numtxt.value)){
        alert("您输入的不是数字,请输入您想插入的数字！");
    }
    else{
        var numli = document.createElement("li");
        numli.innerHTML = numtxt.value;
        if(addfrom === "left"){//点击左侧按钮插入
            show.insertBefore(numli, show.firstChild);//将生成的li元素从前方放入
        }
        else if(addfrom === "right"){//点击右侧按钮插入
            show.appendChild(numli);//将生成的li元素从末尾放入
        }
    }
}

function delnum(from){
    if(show.childNodes.length <= 0){
        alert("没有元素可以删除");
        return false;
    }
    else{
        if(from === "left"){
            alert("删除的数字是：" + show.firstChild.innerHTML);
            show.removeChild(show.firstChild);
        }
        else{
            alert("删除的数字是：" + show.lastChild.innerHTML);
            show.removeChild(show.lastChild);
        }
    }
}

//按钮
leftIn.onclick = function(){insertnum("left")};
leftOut.onclick = function(){delnum("left")};
rightIn.onclick = function(){insertnum("right")};
rightOut.onclick = function(){delnum("right")};