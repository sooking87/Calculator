var functionOfCal = {};
  functionOfCal.input = function (char) {
    var display = document.getElementById('display');
    //input.value는 input태그 안의 있는 값을 유의미하게 바꿔줌
    display.value = display.value + char;
  }
  functionOfCal.result = function () {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
  }
  functionOfCal.continue = function () {
    var beforeResult = eval(document.getElementById('display').value);
    document.getElementById('display').value = beforeResult;
    document.getElementById('result').value = null;
  }
  functionOfCal.getDelete = function () {
    document.getElementById('display').value = null;
    document.getElementById('result').value = null;
  }
