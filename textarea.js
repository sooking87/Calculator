var textArea = {};
  var operationsString = "";
    textArea.outputOp = function () { //배열에 계산식 저장
      var operations = []; //배열에 요소가 추가될 때마다 배열 크기가 늘어남.
      var op =  document.getElementById('display').value;
      var result = eval(op);
      var operation = ">> " + op + "=" + result + "\n"
      operations[operations.length] = operation;
      for (var i = 0; i < operations.length; i++) {
        operationsString += operations[i] + "\n";
      }
      var output = document.getElementById('output');
      output.innerHTML = operationsString;
    }
    textArea.resetAll = function () {
      operationsString += "-----------------------------------------";
      var output = document.getElementById('output');
      output.innerHTML = operationsString;
    }
