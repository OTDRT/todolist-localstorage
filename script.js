// // ローカルストレージへの保存
// // ↓基本の形
// // localStorage.setItem('key','value');
// // keyとvalueのペアで保存する
// localStorage.setItem('name','乙田');
//
// var name ='石黒';
// localStorage.setItem('名前',name);
//
// // ローカルストレージへの保存は文字列しか
// // 入れられないが、数値は文字列に変換されるので
// // 入れられる
//
// var num = 100;
// localStorage.setItem('num',num);
//
// var fruits =['りんご','みかん','バナナ']
// localStorage.setItem('果物',fruits);
//
// // 配列はそのまま並んで表示されてしまうので、
// // 配列をジェイソン形式に変換する必要がある
//
// // JSON
// // JavaScript Object Notation
//
// // JSON形式に変換
// var fruitsJson = JSON.stringify(fruits);
// localStorage.setItem('果物(Json)',fruitsJson);
//
//
// // ローカルストレージからのデータ取得
// // ↓基本の形
// // localStorage.getItem('key');

console.log(localStorage.getItem('name'));
var getData = localStorage.getItem('名前')
console.log(getData);
console.log(localStorage.getItem('num'));
console.log(100);
console.log( +localStorage.getItem('num'));

var getFruits =localStorage.getItem('果物(Json)')
console.log(getFruits);

var jsonParse = JSON.parse(getFruits);
console.log(jsonParse);

// ローカルストレージデータの削除
// localStorage.removeItem('key');
localStorage.removeItem('名前');
// ローカルストレージデータの全削除
localStorage.clear();
