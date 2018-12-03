var APP_ID = 'QpLhPv9TVGmuU3jFss22AuE0-gzGzoHsz';
var APP_KEY = 'aWlbpsJQFv4XS5XieUTM525n';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var gottedMessage=[]
var query = new AV.Query('message')

query.find().then(function(message){
gottedMessage= message.map(iteam=>iteam.attributes)
console.log(gottedMessage)
gottedMessage.forEach(element => {
    let li = document.createElement("li");
    li.innerText=`${element.user} 说： ${element.words}`
    messageList.append(li)
    
});
},function(error){

})


let form=document.querySelector("#postMessage")

form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(form.querySelector('input[name=name]').value.length)
    console.log(form.querySelector('input[name=content]').value.length)
    if (form.querySelector('input[name=name]').value.length<10&&form.querySelector('input[name=content]').value.length<30){
    let user=form.querySelector('input[name=name]').value
    let words=form.querySelector('input[name=content]').value
    var messageData = AV.Object.extend('message');
    var messageData = new messageData();
    messageData.save({
        user:user,
      words: words
    }).then(function(object) {
      console.log("message Post successed!")
      let li = document.createElement("li");
      li.innerText=`${object.attributes.user} 说： ${object.attributes.words}`
      messageList.append(li)
      
    });}else{
        alert("输入内容过长，请重新输入")
        form.querySelector('input[name=name]').value=""
        form.querySelector('input[name=content]').value=""

    }
})
