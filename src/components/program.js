const fs = require('fs')
const readline = require('readline');
const { exception } = require('console');
let outputer = {}

async function processLineByLine() {
    const fileStream = fs.createReadStream('D:\\Work\\todoapp\\src\\components\\input.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
      let array1 = line.split(',')
        try{
            let var1= outputer[array1[2]][1];
            console.log(var1)
            if(Number(var1) < Number(array1[3])){
                outputer[array1[2]] = [array1[0], array1[3]];
            }
        }
        catch{
            outputer[array1[2]] = [array1[0], array1[3]];
        }
    }
    var logger = fs.createWriteStream('output.txt', {
        flags: 'a'
      })
      Object.entries(outputer).map((values,index) =>{
          logger.write(values[0] + ": " + values[1][0] + '\r\n')
      })
  }
  
processLineByLine();