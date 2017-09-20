/* 
* @Author: anchen
* @Date:   2017-09-19 12:47:52
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-20 19:05:20
*/

//绑定变量
var numtxt = document.getElementById("numtxt");
var show = document.getElementById("show");
var leftIn = document.getElementById("leftIn");
var leftOut = document.getElementById("leftOut");
var rightIn = document.getElementById("rightIn");
var rightOut = document.getElementById("rightOut");
var quicksort = document.getElementById("quicksort");
//插入数字
function insertnum(addfrom){
    if(numtxt.value == ""){
        alert("输入内容为空");
    }
    else if(isNaN(numtxt.value)){
        alert("您输入的不是数字,请输入您想插入的数字！");
    }
    else if(numtxt.value <10 || numtxt.value > 100 ){
        alert("请输入10-100以内的数字！");
    }
    else if(show.childNodes.length > 60){
        alert("只能输入60个数值！");
    }
    else{
        var numli = document.createElement("li");
        numli.style.height = numtxt.value + "px";
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
            alert("删除的数字是：" + parseInt(show.firstChild.style.height.replace("px","")));
            show.removeChild(show.firstChild);
        }
        else{
            alert("删除的数字是：" + parseInt(show.lastChild.style.height.replace("px","")));
            show.removeChild(show.lastChild);
        }
    }
}

function sort1(){
    var arr1 = [];
    for(var i = 0; i < show.childNodes.length; i++){
        var changdu = parseInt(show.childNodes[i].style.height.replace("px",""));
        arr1.push(changdu);       
};
    arr1.sort(function(a,b){
               return a-b;
            }); 
    for(var j = 0; j < arr1.length; j++){  

           show.childNodes[j].style.height = arr1[j] + "px";
        }    
    }    

//按钮
leftIn.onclick = function(){insertnum("left")};
leftOut.onclick = function(){delnum("left")};
rightIn.onclick = function(){insertnum("right")};
rightOut.onclick = function(){delnum("right")};
quicksort.onclick = function(){sort1()};
