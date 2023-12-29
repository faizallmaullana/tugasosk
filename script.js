// PILIH ANTARA KONVERSI/KALKULATOR
function setMode(mode) {
  const converterContainer = document.getElementById("converter-container");
  const calculatorContainer = document.getElementById("calculator-container");

  if (mode === "converter") {
    converterContainer.style.display = "block";
    calculatorContainer.style.display = "none";
  } else if (mode === "calculator") {
    converterContainer.style.display = "none";
    calculatorContainer.style.display = "block";
  }
}

// APPLICATION INFORMATION
var modal = document.getElementById("myModal");

// Ketika pengguna mengklik elemen dengan id 'app-info', buka modal
document.getElementById('app-info').addEventListener('click', function() {
  modal.style.display = "block";
});

// Ketika pengguna mengklik elemen dengan class 'close', tutup modal
document.getElementsByClassName('close')[0].addEventListener('click', function() {
  modal.style.display = "none";
});

// Ketika pengguna mengklik di mana saja di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

// FUNGSIONALITAS KONVERSI
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("binary-inp");
  const resultInput = document.getElementById("result");
  const conversionFromSelect = document.getElementById("conversion-from");
  const conversionToSelect = document.getElementById("conversion-to");
  const convertButton = document.getElementById("convert-button");
  const resetButton = document.getElementById("reset-button-converter"); // tombol reset
  const errorMsg = document.getElementById("error-msg");

  convertButton.addEventListener("click", function () {
    const inputValue = inputField.value;
    const conversionFrom = conversionFromSelect.value;
    const conversionTo = conversionToSelect.value;

    const decimalRegex = /^[0-9]+$/;
    const octalRegex = /^[0-7]+$/;
    const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
    const binaryRegex = /^[01]+$/;

    let decimalValue;

    switch (conversionFrom) {
      case "decimal":
        if (decimalRegex.test(inputValue)) {
          decimalValue = parseInt(inputValue, 10);
        } else {
          displayErrorMessage("Masukkan bilangan desimal yang valid.");
          return;
        }
        break;

      case "octal":
        if (octalRegex.test(inputValue)) {
          decimalValue = parseInt(inputValue, 8);
        } else {
          displayErrorMessage("Masukkan bilangan oktal yang valid.");
          return;
        }
        break;

      case "hexadecimal":
        if (hexadecimalRegex.test(inputValue)) {
          decimalValue = parseInt(inputValue, 16);
        } else {
          displayErrorMessage("Masukkan bilangan heksadesimal yang valid.");
          return;
        }
        break;

      case "binary":
        if (binaryRegex.test(inputValue)) {
          decimalValue = parseInt(inputValue, 2);
        } else {
          displayErrorMessage("Masukkan bilangan biner yang valid.");
          return;
        }
        break;

      default:
        displayErrorMessage("Pilih jenis konversi yang sesuai.");
        return;
    }

    errorMsg.textContent = "";

    switch (conversionTo) {
      case "decimal":
        resultInput.value = decimalValue;
        break;

      case "octal":
        resultInput.value = decimalValue.toString(8);
        break;

      case "hexadecimal":
        resultInput.value = decimalValue.toString(16).toUpperCase();
        break;

      case "binary":
        resultInput.value = decimalValue.toString(2);
        break;

      default:
        displayErrorMessage("Pilih jenis konversi yang sesuai.");
        return;
    }
  });

  // Fungsi untuk tombol reset
  resetButton.addEventListener("click", function () {
    inputField.value = "";
    resultInput.value = "";
    conversionFromSelect.selectedIndex = 0; // Mengatur ulang ke opsi default
    conversionToSelect.selectedIndex = 0; // Mengatur ulang ke opsi default
    errorMsg.textContent = "";
  });

  function displayErrorMessage(message) {
    errorMsg.textContent = message;
    resultInput.value = "";
  }
});

// FUNGSIONALITAS KALKULATOR
document.addEventListener("DOMContentLoaded", function () {
  const inputField1 = document.getElementById("num1");
  const inputField2 = document.getElementById("num2");
  const resultInput = document.getElementById("calc-result");
  const numberTypeSelect = document.getElementById("number-type");
  const operationSelect = document.getElementById("operator");
  const calculateButton = document.getElementById("calculate-button");
  const resetButton = document.getElementById("reset-button-calculator"); // tombol reset
  const errorMsg = document.getElementById("calc-error-msg");

  calculateButton.addEventListener("click", function () {
    const inputValue1 = inputField1.value;
    const inputValue2 = inputField2.value;
    const numberType = numberTypeSelect.value;
    const operation = operationSelect.value;

    const decimalRegex = /^[0-9]+$/;
    const octalRegex = /^[0-7]+$/;
    const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
    const binaryRegex = /^[01]+$/;

    let decimalValue1, decimalValue2;

    switch (numberType) {
      case "decimal":
        if (decimalRegex.test(inputValue1) && decimalRegex.test(inputValue2)) {
          decimalValue1 = parseInt(inputValue1, 10);
          decimalValue2 = parseInt(inputValue2, 10);
        } else {
          displayErrorMessage("Masukkan bilangan desimal yang valid.");
          return;
        }
        break;

      case "octal":
        if (octalRegex.test(inputValue1) && octalRegex.test(inputValue2)) {
          decimalValue1 = parseInt(inputValue1, 8);
          decimalValue2 = parseInt(inputValue2, 8);
        } else {
          displayErrorMessage("Masukkan bilangan oktal yang valid.");
          return;
        }
        break;

      case "hexadecimal":
        if (hexadecimalRegex.test(inputValue1) && hexadecimalRegex.test(inputValue2)) {
          decimalValue1 = parseInt(inputValue1, 16);
          decimalValue2 = parseInt(inputValue2, 16);
        } else {
          displayErrorMessage("Masukkan bilangan heksadesimal yang valid.");
          return;
        }
        break;

      case "binary":
        if (binaryRegex.test(inputValue1) && binaryRegex.test(inputValue2)) {
          decimalValue1 = parseInt(inputValue1, 2);
          decimalValue2 = parseInt(inputValue2, 2);
        } else {
          displayErrorMessage("Masukkan bilangan biner yang valid.");
          return;
        }
        break;

      default:
        displayErrorMessage("Pilih jenis bilangan yang sesuai.");
        return;
    }

    errorMsg.textContent = "";

    let result;
    switch (operation) {
      case "+":
        result = decimalValue1 + decimalValue2;
        break;

      case "-":
        result = decimalValue1 - decimalValue2;
        break;

      case "*":
        result = decimalValue1 * decimalValue2;
        break;

      case "/":
        if (decimalValue2 !== 0) {
          result = decimalValue1 / decimalValue2;
        } else {
          displayErrorMessage("Pembagian dengan nol tidak didefinisikan.");
          return;
        }
        break;

      default:
        displayErrorMessage("Pilih operasi yang sesuai.");
        return;
    }

    switch (numberType) {
      case "decimal":
        resultInput.value = result;
        break;

      case "octal":
        resultInput.value = result.toString(8);
        break;

      case "hexadecimal":
        resultInput.value = result.toString(16).toUpperCase();
        break;

      case "binary":
        resultInput.value = result.toString(2);
        break;

      default:
        displayErrorMessage("Pilih jenis bilangan yang sesuai.");
        return;
    }
  });

 // Fungsi untuk tombol reset
 resetButton.addEventListener("click", function () {
    inputField1.value = "";
    inputField2.value = "";
    resultInput.value = "";
    numberTypeSelect.selectedIndex = 0; // Mengatur ulang ke opsi default
    operationSelect.selectedIndex = 0; // Mengatur ulang ke opsi default
    errorMsg.textContent = "";
  });

  function displayErrorMessage(message) {
    errorMsg.textContent = message;
    resultInput.value = "";
  }
});
