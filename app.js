const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`name: ${name} id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`ples let me get a co-op`);
});

customEmitter.emit("response", "john", 34);
