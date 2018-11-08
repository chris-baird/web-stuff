console.log(window.clearInterval);
$.getScript("stopwatch.js", function() {
    console.log(window.clearInterval);
//   console.log(sw);
  const $display = $("#sw-display");

  //   setInterval(() => {
  //     $display.html(sw.duration);
  //     console.log(sw.duration);
  //   }, 0.1);

  const myIntv = setInterval(() => {
    console.log("starting interval");
  });

  const updateDisplay = action => {
      console.log(action);
    

    if (action === "start") {
        console.log(action)
      myIntv;
    } else if (action === "stop") {
        console.log(action)
      console.log("inside else if");
      console.log(window.clearInterval);
      clearInterval(myIntv);
    }
  };


  $(".controls").on("click", event => {
    const action = event.originalEvent.originalTarget.className;

    // console.log(action);

    switch (action) {
      case "start":
        sw.start();
        updateDisplay("start");
        break;
      case "stop":
        sw.stop();
        updateDisplay("stop");
        break;
      case "reset":
        sw.reset();
        updateDisplay("reset");
        break;
    }
  });
});
