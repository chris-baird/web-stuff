// 3 public methods Start() Stop() reset()

const StopWatch = function() {
  let duration = 0;
  let running = false;

  let startDuration = function() {
    if (!running) {
      running = true;
      console.log(`The clock has started`);
      duration = Date.now();
    } else {
      throw new Error("The clock has already been started");
    }
  };

  let endDuration = function() {
    if (running) {
      running = false;
      console.log(`The clock has stopped`);
    } else {
      throw new Error("The clock has already been stopped");
    }
  };

  let resetDuration = function() {
    console.log(`The Clock has been reset`);
    if (duration === 0) {
      throw new Error("The clock has already been reset");
    } else if (!running) {
      duration = 0;
    }
  };

  this.start = function() {
    startDuration();
  };

  this.stop = function() {
    endDuration();
  };

  this.reset = function() {
    resetDuration();
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      if (duration > 0) {
        let time = Date.now() - duration;
        return time;
      } else {
        return duration;
      }
    }
  });
};

const sw = new StopWatch();

sw.start();
console.log(`Time: ${sw.duration}`);

setTimeout(() => {
  sw.stop();
  console.log(`Time: ${sw.duration}`);
}, 3000);

setTimeout(() => {
  sw.reset();
  console.log(`Time: ${sw.duration}`);
}, 5000);

setTimeout(() => {
  sw.reset();
}, 6000);
