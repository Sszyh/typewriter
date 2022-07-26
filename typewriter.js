const sentence = "hello three from lighthouse labs";

let time = 0;

for (const a of sentence) {
  setTimeout(() => {
    process.stdout.write(a); 
    //console.log(a);
  }, time);
  time += 50;
}

setTimeout(( )=> {
  process.stdout.write("\n")
} , time);
//Tip: We can use console.log, or write \n to stdout. That said, we can't output this character until all the characters are written out to stdout.


//(sentence.length * 50)