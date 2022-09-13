// this script is to have an outline of the html
const fs = require('fs');
const Employee = require("../lib/Employee");

export const htmlHeadTag = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./style.css">
</head>`;

export const htmlBodyTagOpen = `
<body>
<div class="header">  
<h2>My Team</h2>
</div>
<div class="allCards">`;


export const htmlBodyTagClose = `    
</div>
</body>
</html>`;





//function to take data from inquirer and generate the html
export function WriteHtml() {
    let new_member = employeecards.join();
    const string = `${htmlHeadTag}${htmlBodyTagOpen}${new_member}${htmlBodyTagClose}`
    
    
    //writing file with all of the html formatting above
    fs.writeFile("./dist/team.html", string, (err) => {
        err ? console.error(err) : console.log("Success writing file")
    
    })
};

module.exports = WriteHtml;
