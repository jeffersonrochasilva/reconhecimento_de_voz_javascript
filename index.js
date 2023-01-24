const texto = window.document.querySelector("#text");
console.log("%cteste de texto", "color:red;", texto);

if ("webkitSpeechRecognition" in window) {
  var recognition = new webkitSpeechRecognition();

  recognition.continuous = true;

  recognition.interimResults = true;

  var startButton = document.getElementById("start-button");

  var output = document.getElementById("output");

  startButton.addEventListener(
    "click",

    function () {
      recognition.start();
    }
  );

  recognition.onresult = (event) => {
    var transcript = "";

    for (var i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    output.innerHTML = transcript;
  };
  recognition.onerror = function (event) {
    console.log("error: " + event.error);
  };
} else {
  console.log("seu navegador não tem suporte ");
}
