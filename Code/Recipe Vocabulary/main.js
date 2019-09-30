var file_name = 'vocab_list.txt'
const fs = require('fs')  
fs.readFile(file_name, (err, data) => { 
    if (err) throw err; 
    var temp = data.toString(); 
    var vocab_arr = {};

    // Not empty, creating new associative array of file info
    if (temp != '') {
        var lines = temp.split('\r\n')
        for (var i = 0; i < lines.length; i++) {
            var split_line = lines[i].split(" ");
            vocab_arr[split_line[0]] = split_line[1];  
        }
    }

    var inquirer = require("inquirer");
    inquirer
    .prompt([
        {
        type: "input",
        message: "Enter paragraph: ",
        name: "paragraph"
        }
    ])
    .then(function(inquirerResponse) {
        var paragraph  = inquirerResponse.paragraph;
        var paragraph_arr = paragraph.trim().toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
        for (var i = 0; i < paragraph_arr.length; i++) {
            // Check if the word exist in the set
            if (vocab_arr[paragraph_arr[i]] == null) { // doesnt exist
                vocab_arr[paragraph_arr[i]] = 1;
            } else { // exist
                vocab_arr[paragraph_arr[i]]++;
            }
        }
        fs.writeFile(file_name, '', function(){console.log('done')})
        for (key in vocab_arr) {
            var value = vocab_arr[key];
            var temp = key + " " + value + "\n";
            fs.appendFile(file_name, temp, function (err) {
                if (err) throw err;
              });
        }
    });
});