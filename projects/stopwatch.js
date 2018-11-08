// 3 public methods Start() Stop() reset()

// Stopwatch Constructor function
const StopWatch = function() {
  let duration = 0;
  let running = false;

  let startDuration = function() {
    if (!running) {
      running = true;
      duration = Date.now();
    } else {
      throw new Error("The clock has already been started");
    }
  };

  let endDuration = function() {
    if (running) {
      running = false;
    } else {
      throw new Error("The clock has already been stopped");
    }
  };

  let resetDuration = function() {
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
        let time = (Date.now() - duration) / 1000;
        return time;
      } else {
        return duration;
      }
    }
  });
};

const sw = new StopWatch();

// module.exports = sw;



// sw.start();
// console.log(`Time: ${sw.duration}`);

// setTimeout(() => {
//   sw.stop();
//   console.log(`Time: ${sw.duration}`);
// }, 4000);

// setTimeout(() => {
//   sw.reset();
//   console.log(`Time: ${sw.duration}`);
// }, 5000);

// setTimeout(() => {
//   sw.reset();
// }, 6000);
