
const names = require('./names');
const sayHii = require('./second-module');
const nameData = require('./alternative-flavor');
require('./mind-grenade');

// sayHii("Sushant");
// sayHii(names.john);
// sayHii(names.peter);




//os

const os = require('os');

//console.log(os);

//console.log(os.cpus);

//current user
const user = os.userInfo();
//console.log(user);

//system uptime in seconds
const upTime = os.uptime();
const minutes = Math.floor(upTime / 60);
const seconds = upTime % 60;
console.log(`System is up since ${minutes} mins and ${seconds} secs.`);

const totalMemInGB = (os.totalmem() / (Math.pow(1024, 3))).toFixed(2);
const freeMemInGB = (os.freemem() / (Math.pow(1024, 3))).toFixed(2);

const currentOS = {
    name: os.type(),
    totalMemory: `${totalMemInGB} GB`,
    freeMemory: `${freeMemInGB} GB`,
    release: os.release(),
}

console.log(currentOS);


//path
const path = require('path');
//console.log(path.sep);

const filePath = path.join('\content/', 'subfolder', 'test.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

console.log(__dirname);

const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(abs);

//console.log(path.join(__dirname, filePath));



//fs

const { readFileSync, writeFileSync } = require('fs');
const { readFile } = require('fs');
const { writeFile } = require('fs');

// const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
// const second = readFileSync('./content/subfolder/first.txt', 'utf-8');

// console.log(first);
// console.log(second);

// writeFileSync('./content/subfolder/result.txt', `Here is the result:\n${first}${second}`
//     //     { flag: 'a' }
// );

readFile('./content/subfolder/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    //console.log(res);
    const first = res;
    readFile('./content/subfolder/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        //console.log(res);
        const second = res;
        writeFile('./content/subfolder/result-async.txt',
            `Here is the result:\n${first}${second}`, (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(res);
            });
    });
});


//http
const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === "/") {
        res.end('<h1>Welcome to our home page</h1>');
    }
    if (req.url === "/about") {
        res.end('<h1>about page</h1>');
    }
    res.end(`<h1> Oops..... 404 - Page not found</h1>
    <a href="/">Back to Home</a>
    `);
});

server.listen(3000);

