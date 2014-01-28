var parser = require('node-markdown');
var html = parser.Markdown('using **markdown** helps you focus on writing *not*');
console.log(html);