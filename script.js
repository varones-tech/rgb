window.addEventListener('load', onLoad);

function onLoad() {
  document
    .querySelector('#inputRed')
    .addEventListener('change', handleRangeChange);

  handleRangeChange();
}

function handleRangeChange() {
  var divResult = document.querySelector('#divColorResult');
  var rCode = document.querySelector('#inputRed').value;
  var gCode = 0;
  var bCode = 0;

  document.querySelector('#inputRedValue').value = rCode;

  divResult.style = `background-color: rgb(${rCode},${gCode},${bCode})`;
}
