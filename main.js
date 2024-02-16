window.addEventListener('load', () => {
    const form= document.querySelector("#addition");
    const input= document.querySelector("#names");
    const list_el = document.querySelector("#addpeople");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = input.value;

        if(!name){
            alert("Please fill out the name");
            return;
        }

        const name_el= document.createElement("div");
        name_el.classList.add("Name");

        const name_content_el= document.createElement("div");
        name_el.classList.add("content");

        name_el.appendChild(name_content_el);

        const name_input_el = document.createElement("input");
        name_input_el.classList.add("text");
        name_input_el.type = "text";
        name_input_el.value = name;
        name_input_el.setAttribute("readonly", "readonly");

        name_content_el.appendChild(name_input_el);

        const name_action_el = document.createElement("div");
        name_action_el.classList.add("action");
    
        const name_edit_el = document.createElement("button");
        name_edit_el.classList.add("edit");
        name_edit_el.innerHTML = "Edit";

        const name_delete_el = document.createElement("button");
        name_delete_el.classList.add("Delete");
        name_delete_el.innerHTML = "Delete";

        name_action_e1.appendChild(name_edit_e1);
        name_action_e1.appendChild(name_delete_el);

        name_e1.appendChild(name_action_e1);

        list_el.appendChild(name_el);
    

        input.value = "";

        name_edit_el.addEventListener('click', () => {

            if(name_edit_el.innerText.toLowerCase() == "edit"){
            name_edit_el.innerText= "Save";
            name_input_el.removeAttribute("readonly");
            name_input_el.focus();
           
            }
            else{
                name_edit_el.innerText= "Edit";
                name_input_el.setAttribute("readonly","readonly");
              
            }


        });
        name_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(name_el);

        });

    });
});