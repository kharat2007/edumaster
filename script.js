const form=document.querySelector(".contact-form");

form.addEventListener("submit",function(e){
e.preventDefault();
alert("Thank you! We have received your message.");
form.reset();
});

const questions=document.querySelectorAll(".faq-question");

questions.forEach(question=>{

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

if(answer.style.display==="block"){
answer.style.display="none";
question.querySelector("span").textContent="+";
}else{
answer.style.display="block";
question.querySelector("span").textContent="−";
}

});

});