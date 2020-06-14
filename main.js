const { exit } = require('process');

fs = require('fs');
var DOMParser = require('xmldom').DOMParser;
fs.readFile('example.html', 'utf8', function (err,data) {
    var htmlContent = new DOMParser().parseFromString(data, 'text/html');
    var pTags = htmlContent.getElementsByTagName('span');
    for(let i = 0 ; i < pTags.length ; i ++) {
        for( let j = 0 ; j < pTags[i].childNodes.length ; j ++){
            let firstChild = pTags[i].childNodes[j];
            if(firstChild.tagName == undefined && firstChild.nodeValue.trim() != ""){
                let convertString = firstChild.nodeValue.trim();
                data = data.replace(convertString, "<span>" + convertString + "</span>");
                console.log(convertString)
            }
            pTags[i].removeChild(firstChild)
        }
    }

    var spanTags = htmlContent.getElementsByTagName('span');
    for(let i = 0 ; i < spanTags.length ; i ++) {
        for( let j = 0 ; j < spanTags[i].childNodes.length ; j ++){
            let firstChild = spanTags[i].childNodes[j];
            if(firstChild.tagName == undefined && firstChild.nodeValue.trim() != ""){
                let convertString = firstChild.nodeValue.trim();
                data = data.replace(convertString, "<span>" + convertString + "</span>");
                console.log(convertString)
            }
            spanTags[i].removeChild(firstChild)
        }
    }
    fs.writeFile("temp.txt", data, (err) => {
        if (err) console.log(err);
    });
});

