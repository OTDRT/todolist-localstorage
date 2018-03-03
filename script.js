// var copyBtn = document.getElementById('copy-btn');
// var text = document.getElementById('text');
// // var resultText = document.getElementById('result-text');
// var resultArea = document.getElementById('result-area');
//
// // copyBtn.addEventListener('click',function(){
// //   var sampleText = text.innerHTML;
// //   console.log(sampleText);
// //   resultText.innerHTML =sampleText;
// // });
//
// copyBtn.addEventListener('click',function(){
//   var sampleText = text.innerHTML;
//   var p = document.createElement('p');
//   p.innerHTML =sampleText;
//   resultArea.appendChild(p);
// });

var addBtn = document.getElementById('add-btn');
var input = document.getElementById('title');
var textArea = document.getElementById('content');
var toDoArea = document.getElementById('to-do-area')



addBtn.addEventListener('click',function(){
  var title = input.value;
  var content = textArea.value;
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  h2.innerHTML = title;
  p.innerHTML = content;
  var li = document.createElement('li');
  toDoArea.appendChild(li);
  li.appendChild(h2);
  li.appendChild(p);
});
