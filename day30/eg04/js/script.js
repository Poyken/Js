//dinh nghia cac event cho cac element

var inputRangeList = document.querySelectorAll(`input[type="range"]`);

var overEvent = new Event("over");

if (inputRangeList.length) {
  inputRangeList.forEach(function (input) {
    input.addEventListener("mousemove", function (e) {
      var offsetX = e.offsetX;
      var value = (offsetX * 100) / input.clientWidth;
      value = value.toFixed(2);
      this.data = value;
      overEvent.skipX = offsetX;
      overEvent.CX = e.clientX;
      input.dispatchEvent(overEvent);
    });
  });
}
