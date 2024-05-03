let arr=["The user can map keyboard shortcuts to math symbols in order to gain higher typing speed",
"The design tries to enforce the alternating usage of both hands to increase typing speed",
"Its maker claims not just quicker typing speeds but more accurate spelling and capitalisation for texts and email.",
"accurate spelling and capitalisation for texts and emaiThe user can map keyboard shortcuts to math symbols",
"The design tries to enforce the alternating usage of both hands to increase typing speed",
"Its maker claims not just quicker typing speeds but more accurate spelling and capitalisation for texts and email.",
"accurate spelling and capitalisation for texts and emaiThe user can map keyboard shortcuts to math symbols",
"The user can map keyboard shortcuts to math symbols in order to gain higher typing speed",
"The design tries to enforce the alternating usage of both hands to increase typing speed",
"Its maker claims not just quicker typing speeds but more accurate spelling and capitalisation for texts and email.",
"The design tries to enforce the alternating usage of both hands to increase typing speed"];
let idx=Math.ceil(Math.random()*10);
let btn=document.querySelector(".btn");
let textArea=document.querySelector(".text-area");
let text=document.querySelector(".text");
let newText=document.createElement("h3");
let startTime,endTime;
function wordCounter(str){
let response=str.split(" ").length;
console.log(response);
return response;
}
function compareWords(str1,str2){
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let cnt=0;
    word1.forEach((item,index)=>{
if(item==word2[index]){
    cnt++;
}
    })
    let errorWord=(word1.length - cnt);
    return [errorWord,cnt];

}
btn.addEventListener("click",(e)=>{
    
textArea.setAttribute("placeholder","Reminder be nice!");
textArea.removeAttribute("disabled");
let date=new Date();
    startTime=date.getTime();
btn.setAttribute("class","done");

newText.innerText=`${arr[idx]}`;
text.appendChild(newText);
btn.innerText="Done";

    
textArea.addEventListener("keydown",(e)=>{
    
    if(e.key=="Enter"){
        let date=new Date();
        endTime=date.getTime();
        let totalTime=((endTime - startTime) / 1000);
        console.log(totalTime);
        
        textArea.setAttribute("disabled","true"); 
        let totalStr=textArea.value;
        let wordCount=wordCounter(totalStr);
        let speed=Math.round((wordCount / totalTime) * 60);
        let arr=compareWords( newText.innerText,totalStr);

        newText.innerText=`you typed total at ${speed} words per minute.${arr[1]} correct out of ${wordCount} words and the total number of error are${arr[0]}.`; 
    }
    })


let done=document.querySelector(".done");
done.addEventListener("click",(e)=>{
    
    if(textArea.value){newText.innerText="Hope  you are having fun this is a simple game you can make!";  
        textArea.setAttribute("disabled","true"); 
}
    else{
        newText.innerText="please enter something";
    }
})
})

