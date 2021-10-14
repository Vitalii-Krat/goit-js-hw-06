
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
    
  const formElements = event.currentTarget.elements;

  const Email = formElements.email.value;
  const Password = formElements.password.value;

  const formData = {
       Email,
      Password
     };

  console.log(formData);
  
  event.currentTarget.reset();
}