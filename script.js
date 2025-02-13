const number1 = document.getElementById("exampleInputNumber1");
const text1 = document.getElementById("exampleInputText1");
const number2 = document.getElementById("exampleInputNumber2");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const result1 = document.getElementById("rend1");
const result2 = document.getElementById("rend2");
const result3 = document.getElementById("rend3");
const expenseTitle = document.getElementById("expense-title");
const expenseValue = document.getElementById("expense-value");
const expenseIcons = document.getElementById("expense-icons");


button1.addEventListener("click", (e) => {
    e.preventDefault();
    result1.innerHTML = number1.value;
    result2.innerHTML = 0;
    result3.innerHTML = number1.value;
    if (number1.value === "") {
        alert("value cannot be empty or negative");
        result1.innerHTML = 0;
        result2.innerHTML = 0;
        result3.innerHTML = 0;
    }
})


button2.addEventListener("click", (e) => {
    e.preventDefault();
    result2.innerHTML = number2.value;
    result3.innerHTML = parseInt(result3.textContent) - parseInt(number2.value); 
    
    if (number2.value === "") {
        alert("value cannot be empty or negative");
        result2.innerHTML = 0;
        result3.innerHTML = number1.value;
    };

    if (text1.value === "") {
        alert("value cannot be empty or negative");
        result2.innerHTML = 0;
        result3.innerHTML = number1.value;
    }
     
        const div = document.createElement('div');
        div.innerHTML = `
        <h6 class="expense-title mb-0 text-danger text-uppercase list-item">- ${text1.value}</h6>
        </div>`;
        expenseTitle.appendChild(div);

        const div2 = document.createElement('div');
        div2.innerHTML = `
        <h6 class="expense-amount mb-0 text-danger list-item">${number2.value}</h6>
        </div>`;
        expenseValue.appendChild(div2);


        const div3 = document.createElement('div');
        div3.innerHTML = `
          <a href="#" class="edit-icon mx-2">
          <i class="bi bi-pencil-square"></i>
          </a>
          <a href="#" class="delete-icon">
          <i class="bi bi-trash3-fill"></i>
          </a> 
        </div>`;
        expenseIcons.appendChild(div3);

        const editIcon = div3.querySelector('.edit-icon');
        const deleteIcon = div3.querySelector('.delete-icon');

        editIcon.addEventListener('click', () => {
            result2.innerHTML = 0;
            result3.innerHTML = number1.value;
            div.innerHTML = "";
            div2.innerHTML = "";
            div3.innerHTML = "";
        });

        deleteIcon.addEventListener('click', () => {
            result2.innerHTML = 0;
            result3.innerHTML = number1.value;
            div.innerHTML = "";
            div2.innerHTML = "";
            div3.innerHTML = ""; 
        });
      

    
})

   