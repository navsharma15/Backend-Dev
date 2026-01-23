const os = require("os");

const fs = require("fs");

function saveSystemInfo() {
  let time = new Date();
  let platform = os.platform();
  let cpuCores = os.cpus().length;
  let freeMemory = os.freemem();

  let data =
    "Time: " + time + "\n" +
    "Platform: " + platform + "\n" +
    "CPU Cores: " + cpuCores + "\n" +
    "Free Memory: " + freeMemory + "\n";

  fs.appendFileSync("system.Log", data);
  console.log("System info saved");
}
setInterval(saveSystemInfo, 5000);
