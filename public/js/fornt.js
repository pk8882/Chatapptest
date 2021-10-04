const socket = io();
let name;
do{
    name=prompt("Enter your name");
}while(!name);

let textarea=document.getElementById("textarea");
let messdiv=document.querySelector(".contianer");

textarea.addEventListener('keydown',(e)=>{
   if(e.key==="Enter"){
    sendmessage(e.target.value);
   }
});

function sendmessage(msg){
    let message={
        user:name,
        message:msg.trim()
    }
    // Append
    appendMessage(message,'outgoing')
    // send to server
    
    textarea.value=''
    socket.emit('message',message);

}

function appendMessage(message,type){
    let maindiv=document.createElement('div');
    let className=type;
    maindiv.classList.add(className,'message');

    let markup=`
    <h4>${message.user}</h4>
    <p> ${message.message}</p>
    `
    maindiv.innerHTML=markup;
    messdiv.append(maindiv);
    scrollToBottom();
}
//Recive message
socket.on('message',(message)=>{
    appendMessage(message,'incoming')
    scrollToBottom();
    

});

function scrollToBottom(){
    messdiv.scrollTop=messdiv.scrollHeight;
    console.log(messdiv.scrollHeight);
}


