var file_name = 'vocab_list.txt';
const fs = require('fs');
fs.readFile(file_name, (err, data) => { 
    if (err) throw err; 
    var temp = data.toString(); 
    var vocab_arr = {};
    const omit_words = new Set(['a','an','the','i','you','he','she','it','they','me','you','him',
        'her','it','my','mine','your','yours','his','her','hers','its','who','whom','whose','what',
        'which','another','each','everything','nobody','either','someone','who','whom','whose',
        'that','which','myself','yourself','himself','herself','itself','this','that']);

    // Not empty, creating new associative array of file info
    if (temp != '') {
        var lines = temp.split('\n')
        for (var i = 0; i < lines.length; i++) {
            var split_line = lines[i].split(" ");
            // Catch a empty line
            if (split_line != '') {
                vocab_arr[split_line[0]] = split_line[1];
            }  
        }
    }

    var inquirer = require("inquirer");
    inquirer
    .prompt([
        {
        type: "input",
        message: "Enter or ('clear'): ",
        name: "paragraph"
        }
    ])
    .then(function(inquirerResponse) {
        var paragraph  = inquirerResponse.paragraph.toLowerCase();

        if (paragraph == "clear") { // -------------------------- CLEAR --------------------------
            fs.writeFile(file_name, '', function(){console.log('done')});

        } else if (paragraph == "sort") { // -------------------------- SORT --------------------------
            // var tuples = [];
            // for (var key in vocab_arr) tuples.push([key, vocab_arr[key]]);
            // tuples.sort(function(a, b) {
            //     a = a[1];
            //     b = b[1];
            //     return a < b ? -1 : (a > b ? 1 : 0);
            // });

            // fs.writeFile(file_name, '', function(){console.log('')});
            // for (var i = 0; i < tuples.length; i++) {
            //     var key = tuples[i][0];
            //     var value = tuples[i][1];

            //     var temp = key + " " + value + "\n";
            //     fs.appendFile(file_name, temp, function (err) {
            //         if (err) throw err;
            //     });
            //     // do something with key and value
            // }
        } else { // -------------------------- INSERT PARAGRAPH --------------------------
            var paragraph_arr = paragraph.trim().toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
            for (var i = 0; i < paragraph_arr.length; i++) {
                // Check if the word exist in the set
                if (vocab_arr[paragraph_arr[i]] == null) { // doesnt exist
                    vocab_arr[paragraph_arr[i]] = 1;
                } else { // exist
                    vocab_arr[paragraph_arr[i]]++;
                }
            }
            // Sorting
            var tuples = [];
            for (var key in vocab_arr) tuples.push([key, vocab_arr[key]]);
            tuples.sort(function(a, b) {
                a = a[1];
                b = b[1];
                return a < b ? -1 : (a > b ? 1 : 0);
            });

            fs.writeFile(file_name, '', function(){console.log('')});
            for (var i = 0; i < tuples.length; i++) {
                var key = tuples[i][0];
                var value = tuples[i][1];

                var temp = key + " " + value + "\n";
                fs.appendFile(file_name, temp, function (err) {
                    if (err) throw err;
                });
            }
        }
    });
});