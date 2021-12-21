
const textArea = document.getElementById('storage');
const btn1 = document.getElementById('saveBtn1');


btn1.addEventListener("click", function(){
    const text = textArea.value;

    if(text){
        localStorage.setItem(1,text);
    }
}
)