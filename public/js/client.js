// socket.io
const socket=io()
let name;

let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let user=document.querySelector("input").value;
    alert(user);
});
socket.emit('name',name)