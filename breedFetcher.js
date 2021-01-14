const request = require('request');

//1- get command line argument
let args = process.argv.slice(2);
// let url = args[0]
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + args[0].substring(0, 4);
//could turn Siberian to sibe which works now need to incorporate with rest of link
//https://api.thecatapi.com/v1/breeds/search?q=sib
//cut the command line arg to 4 char

request(url, (error, response, body) => {
  if (error !== null) {
    return console.log("error in your URL");
  }
  const data = JSON.parse(body); //parse means to go through the data parse through it to find key value data structures
  if (data[0] === undefined) { //data.length === 0
    return console.log("That breed is not in the system");
  } else {
    console.log(data[0].description);
  }
  //console.log(typeof data);
});

//access the first entry in the data array and print out the description for the user DONE? data[0].weight
//they should put in name which will access the right API for that cat and return the description for it data[0].description
//i think we have to cut the search string thats given in the command line down to 4 characters before plugging it into the search url
//cat website says they search with up to 4 characters to a key
//so siberian ->  sibe
// var string = "this is a string";
// var length = 7;
// var trimmedString = string.substring(0, length);

//what I tried for not found edge case (!url) {return something}
//(data[0].description === undefined)
//(url === undefined)
//(data[0] === undefined??)havent tried yet
