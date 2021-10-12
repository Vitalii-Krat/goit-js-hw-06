
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
  if (email.value === "" || password.value === "") {
      return alert("Предупреждение! Все поля должны быть заполнены!");
  }
    
     const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(name);
        console.log(value);
    });
    
  event.currentTarget.reset();
}