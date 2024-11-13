// alert("test");
var my_email=document.querySelector("#email-valid");

console.log(my_email)  
my_email.addEventListener("keypress",(e)=>{ 
  var txt=my_email.value;
  if((txt.length % 4) == 0  && txt.length > 0){
    txt+="_";
    
}
  my_email.value= txt ;
});