window.addEventListener('load', onLoad);

function onLoad() {
  document
    .querySelector('#inputRed')
    .addEventListener('change', handleRangeChange);

  document
    .querySelector('#inputBlue')
    .addEventListener('change', handleRangeChange);

  handleRangeChange();
}

function handleRangeChange() {
  var divResult = document.querySelector('#divColorResult');
  var rCode = document.querySelector('#inputRed').value;
  var gCode = 0;
  var bCode = document.querySelector('#inputBlue').value;

  document.querySelector('#inputRedValue').value = rCode;

  document.querySelector('#inputBlueValue').value = bCode;

  divResult.style = `background-color: rgb(${rCode},${gCode},${bCode})`;
}
