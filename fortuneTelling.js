// 名前を入力すると運勢結果が表示される

// 表示される入力欄
let fortuneTelling = document.getElementById("fortuneTelling");

// 運勢結果ストック
const result = [
  "運がいい",
  "とても運がいい",
  "運がいいかもしれない",
  "運が悪いかもしれない",
  "運がいいのは気のせいかもしれない",
  "鹿になるには険しい道だぞ",
  "うれしい、たのしい、だいすき",
  "もうそろそろ寝たい",
];

/* ランダムで運勢結果ストックの中から1つ選択して表示する
*/
fortuneTelling.addEventListener("click", function() {
  let resultNum = Math.floor(Math.random() * result.length);
  let resultText = result[resultNum];

  let displayFortuneTellingResult = document.getElementById("result");
  displayFortuneTellingResult.innerHTML = "今日の運勢は「" + resultText + "」だよ!";
}); 