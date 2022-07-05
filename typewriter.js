const sentence = "hello three from lighthouse labs";

let time = 0;

for (const a of sentence) {
  setTimeout(() => {
    process.stdout.write(a + "\n"); 
  }, time);
  time += 50;
  
}
//process.stdout.write("\n")

