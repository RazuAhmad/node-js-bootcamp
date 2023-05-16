const file=require('fs');

const ourReadStream =file.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream =file.createWriteStream(`${__dirname}/outPutData.txt`);

ourReadStream.on('data', (chunk)=>{

    file.writeFile(chunk)
})

// console.log('Hellow shobai ke...');

file.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });