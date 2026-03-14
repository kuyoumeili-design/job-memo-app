const input = document.getElementById("memoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("memoList");

button.addEventListener("click", function(){

    const text = input.value;

    if(text === ""){
    return;
}

    const li = document.createElement("li");

    li.textContent = text;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "削除";

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";

});
input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        button.click();

    }

});