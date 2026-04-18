let count=0
let prgbox=document.querySelector(".progress-box")
let h2=document.querySelector("h2")
let span=document.querySelector("#percent")
setInterval(function () {
    if(count<=99){
        count++;
        prgbox.style.width=`${count}%`;
        span.textContent=`${count}%`;
        if (count==100){
            h2.textContent="Downloaded"
        }
    }
    
}, 30);