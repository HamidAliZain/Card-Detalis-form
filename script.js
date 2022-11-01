let chekCardholder = document.querySelector(".chekCardholder");
let chekCardnumber = document.querySelector(".chekCardnumber");
let chekExpDate = document.querySelector(".chekExpDate");
let chekMonth = document.querySelector(".chekMonth");
let chekCvc = document.querySelector(".chekCvc");
let showAlert = document.querySelector(".alert");

 function inputvalue(e, clases) {
  document.querySelector(clases).innerText = e.target.value;
  if (clases === ".cardNumber") {
    document.querySelector(clases).innerText = e.target.value
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ");
  }
}

// confirm Card Details //
function cardDetails(e) {
  e.preventDefault();
  let txtValdatione = !/^[a-zA-Z+ ]+$/.test(chekCardholder.value);

  if (chekCardholder.value === "" || txtValdatione) {
    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 1000);
  } else if (
    chekCardnumber.value === "" ||
    chekCardnumber.value.length !== 16
  ) {
    document.querySelector(".alert2").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert2").style.display = "none";
    }, 1000);
  } else if (chekExpDate.value === "") {
    document.querySelector(".alert3").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert3").style.display = "none";
    }, 1000);
  } else if (chekMonth.value === "") {
    document.querySelector(".alert4").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert4").style.display = "none";
    }, 1000);
  } else if (chekCvc.value === "") {
    document.querySelector(".alert5").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert5").style.display = "none";
    }, 1000);
  } else {
    if (confirm("are you sure")) {
      chekCardholder.value = "";
      chekCardnumber.value = "";
      chekExpDate.value = "";
      chekMonth.value = "";
      chekCvc.value = "";
      showAlert.value = "";
      document.querySelector(".confirmed").style.display = "flex";
      document.querySelector(".form").style.display = "none";
    }
  }
}
// back to form //
function contin() {
  document.querySelector(".confirmed").style.display = "none";
  document.querySelector(".form").style.display = "block";
}
// regular expression for input value length//
const expiry = (e) =>
  (e.target.value = e.target.value.match(/^([^e+-]{0,2})/)[0]);
const cvc = (e) => (e.target.value = e.target.value.match(/^([^e+-]{0,3})/)[0]);
const cardnumber = (e) =>
  (e.target.value = e.target.value.match(/^([^e+-]{0,16})/)[0]);
