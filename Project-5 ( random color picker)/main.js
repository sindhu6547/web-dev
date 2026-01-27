const colorPicker=document.getElementById("colorPicker");
const randomColorBtn=document.getElementsByClassName("randomColorBtn")[0];
const gradientBtn=document.getElementsByClassName("gradientBtn")[0]
const themeBtn=document.getElementsByClassName("themeBtn")[0]
const codeText=document.getElementById("codeText");
const body=document.body

colorPicker.addEventListener("input",()=>{
    const color=colorPicker.value;
    body.style.backgroundColor=color;
    codeText.textContent=color
})
randomColorBtn.addEventListener("click",()=>{
    const color=getRandomColor();
     body.style.background=color
    codeText.textContent=color
})

gradientBtn.addEventListener("click",()=>{
    const randomColor1=getRandomColor();
    const randomColor2=getRandomColor();
    const words=["left","right","bottom","top"]
    const randomDirection=getRandomDirection(words)
    const gradient=`linear-gradient(to ${randomDirection},${randomColor1},${randomColor2})`;
    body.style.background=gradient
    codeText.textContent=gradient
})
themeBtn.addEventListener("click",()=>{
    body.classList.toggle("dark");
    body.classList.toggle("light")
})
function getRandomColor(){
    return "#"+ Math.floor(Math.random()*16777215).toString(16).padStart(6, "0")
}
function getRandomDirection(strings){
    const randomindex=Math.floor(Math.random()*strings.length)
    return strings[randomindex]
}