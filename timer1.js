const args = process.argv.slice(2);
const beep = function() {
  
  if (args.length < 1) {
    return;
  }

  for (let i = 0; i < args.length; i++) {
    const num = Number(args[i]);
  
    if (isNaN(num)) {
      continue;
    }
  
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
};
beep();