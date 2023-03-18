let count=0
let count_EL=document.getElementById("count-el")
function increment(){
    count+=1;
    count_EL.textContent=count;
}
//textcontent is better than innertext because it only takes human readable element
function save(){
    let countStr=count+" - "
    document.getElementById("save-el").textContent+=countStr
}
