// JavaScript code for handling form submission and experience section toggle
function handleSubmit() {
  const emailInput = document.getElementById("emailInput");
  const errorEmail = document.getElementById("error-email");
  const formInput = document.getElementById("form-input");
  const formSection = document.getElementById("form-section");

  const emailValue = emailInput.value.trim();

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === "") {
    errorEmail.textContent = "Vui lòng nhập email.";
    return;
  }

  if (!regex.test(emailValue)) {
    errorEmail.textContent = "Email không đúng định dạng.";
    return;
  }

  errorEmail.textContent = "";

  formInput.classList.add("hide");
  formSection.classList.remove("hide");
}

// Function to toggle the experience section
const buttons = document.querySelectorAll(".viewMoreBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const parent = btn.closest(".content-container");

    const content = parent.querySelector(".content-toggle");

    if (content.style.display === "block") {
      content.style.display = "none";
      btn.innerHTML = `<i class="fa fa-sort-desc" aria-hidden="true"></i> View More`;
    } else {
      content.style.display = "block";
      btn.innerHTML = `<i class="fa fa-sort-asc" aria-hidden="true"></i> View Less`;
    }
  });
});
