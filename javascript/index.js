const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？';
const answers = [
    'ニンテンドーDS', 
    'プレステーション２', 
    'ニンテンドースイッチ', 
    'スーパーファミコン'
];
const correct = 'ニンテンドーDS';

// 定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定