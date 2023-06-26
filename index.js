console.log("hello world");

const add =(a,b)=>{
      return a+b;
}

console.log(add(5,8));

console.log(process.argv);

var arg = process.argv.slice(2);

console.log("Addition of the given numbers is:-",add(parseInt(arg[0]) , parseInt(arg[1])));
