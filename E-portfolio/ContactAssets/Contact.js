let button1=document.querySelector("#btn1");
button1.addEventListener("click",()=>{
    let box=document.querySelector("#box1");
    if(box.style.bottom==='-1%'){
        box.style.bottom='-500%';
    }else{
        box.style.bottom='-1%';
    }

});

let button2=document.querySelector("#btn2");
button2.addEventListener("click",()=>{
    let box=document.querySelector("#box2");
    if(box.style.left==='50%'){
        box.style.left='-500%';
    } else{  
        box.style.left='50%';
    }

});

let button3=document.querySelector("#btn3");
button3.addEventListener("click",()=>{
    let box=document.querySelector("#box3");
    if(box.style.right==='7%'){
        box.style.right='-500%';
    }else{
        box.style.right='7%';
    }
});
