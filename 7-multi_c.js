const message = 'C is fun';
const times = Number(process.argv[2]);

if (Number.isInteger(times) && times > 0) {
  for (let i = 0; i < times; i++) {
    console.log(message);
  }
} else {
  // Print nothing if not a positive integer
}
