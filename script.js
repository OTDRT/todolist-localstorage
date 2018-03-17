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
var removeBtn = document.getElementById('remove-btn');
var input = document.getElementById('title');
var textArea = document.getElementById('content');
var toDoArea = document.getElementById('to-do-area');
var toDoItems =[];
var form =document.forms.form
//↑name内に-が使われているとき
//var form = document.forms['to-do-form']
//など、[]でくくらないと使用できない
console.dir(form.title.value);

//追加ボタンを押したときの処理
function addToDo(){
  var id = Math.random();
  var title = input.value;
  var content = textArea.value;

//↓タイトルが空文字のとき追加できないようにする
  if(title == false){
    return false;
}
//↓titleとcontentをひとつのオブジェクトにまとめる
  var toDoItem = {
    id: id,
    title: title,
    content: content,
  };
//↑titleとcontentをひとつのオブジェクトにまとめる
  saveData(toDoItem);
  displayToDo(toDoItem);
//↓追加ボタンを押したときに入力エリアを空にする
  input.value = '';
  textArea.value = '';
}

function saveData(data){
  toDoItems.push(data);　//←空の配列に入れる
  saveLocalStorage(toDoItems);
}

function saveLocalStorage(dataArray){
  var data = JSON.stringify(dataArray);
  localStorage.setItem('todo',data);
}
addBtn.addEventListener('click',addToDo);
//↓toDo表示のファンクション
function displayToDo(toDoObj){ //()内にファンクション内で使う引数名を書く
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  var deleteBtn = document.createElement('button');
  h2.innerHTML = toDoObj.title;
  p.innerHTML = toDoObj.content;
  deleteBtn.innerHTML ='削除する'

deleteBtn.addEventListener('click',function(){
  toDoArea.removeChild(li);

  var result = toDoItems.find(function(elem){
    return elem.id === toDoObj.id;
  });
  var tgtIndex = toDoItems.indexOf(result);
  toDoItems.splice(tgtIndex,1);
  saveLocalStorage(toDoItems);
});

  var li = document.createElement('li');
  toDoArea.appendChild(li);
  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(deleteBtn)
}
//↑toDo表示のファンクション

//↓ローカルストレージからデータを取得のファンクション
function getLocalStorage(){
  var data = localStorage.getItem('todo');
  parseData = JSON.parse(data);
  return parseData;
}
function loadData(){
  var toDoData = getLocalStorage();
  // console.log(toDoDate);
  if(!toDoData){ // ←toDoDateが空（null）の場合
    return false;
  }
  for (var i = 0; i < toDoData.length; i++){
    //↓リロード時にローカルストレージに保存する配列が空になってしまうので、
    //配列に入れなおす。
    var toDoItem = {
      id: toDoData[i].id,
      title: toDoData[i].title,
      content: toDoData[i].content,
    };
    toDoItems.push(toDoItem);
    displayToDo(toDoItem);
  }
}
//↓リロード時にtodoを表示してる。
window.addEventListener('DOMContentLoaded',loadData);

//todoの一括削除
function removeToDo(){
  //ulの一括削除
  while(toDoArea.firstChild){
    toDoArea.removeChild(toDoArea.firstChild);
  }
  localStorage.clear();
  toDoItems = [];
}

removeBtn.addEventListener('click',removeToDo);
