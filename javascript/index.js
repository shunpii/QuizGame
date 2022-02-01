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

const $button = document.getElementsByTagName('button')

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
    if (correct  === $button[0].textContent) {
        window.alert('正解!');
    }else {
        window.alert('不正解!');
    }
});