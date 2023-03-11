{
  let nameDisplay = document.getElementById("card-holder")
  let nameInput = document.getElementById("form-name")
  let numberDisplay = document.getElementById("card-number")
  let numberInput = document.getElementById("form-number")
  let expDisplay = document.getElementById("card-date")
  let expInputM = document.getElementById("form-month")
  let expInputY = document.getElementById("form-year")
  let cvcDisplay = document.getElementById("card-cvc")
  let cvcInput = document.getElementById("form-cvc")
  let confirm = document.getElementById("confirm")


  confirm.addEventListener("click", submit)

  function submit() {
    numberDisplay.innerHTML = numberInput.value
    nameDisplay.innerHTML = nameInput.value
    cvcDisplay.innerHTML = cvcInput.value
    expDisplay.innerHTML = ` ${expInputM.value} / ${expInputY.value} `
  }


  
}