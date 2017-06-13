/*
   Goal of this exercise is to learn nested callbacks.
   What you will be creating is a never-ending cycle of callbacks.
   You have three text files, and js file.
   You need to read data from all three files(remember fs!) and write to file no 4.
   Then you will be reading data from file number 4, and writing to file number.
   Welcome to Asynchronous world...

*/

//require fs
const fs = require('fs');


//read file1
    //read file2
        //read file3
          //join file1, fil2 and file3 contents
          //write to file4
              // console.log('Concatenated file1.txt, file2.txt, file3.txt into file4.txt.');
              //read file4
                //write file5
                  // console.log('File4 content was copied over to file5')

