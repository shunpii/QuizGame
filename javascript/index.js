const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers: [
            'ニンテンドーDS', 
            'プレステーション２', 
            'ニンテンドースイッチ', 
            'スーパーファミコン'
        ],
        correct: 'ニンテンドーDS'
    },{
        question: 'お酢に卵を殻ごといれると卵はどうなるでしょう？',
        answers: [
            '透明な卵になる', 
            '鏡のようになんでもうつる卵になる', 
            '卵が溶けてなくなる', 
            '卵が石のように堅くなる'
        ],
        correct: '透明な卵になる'
    },{
        question: 'しゃっくりはある調味料をなめると止まります。ある調味料とはなんでしょう？',
        answers: [
            'お酢', 
            '砂糖', 
            '醤油', 
            '塩'
        ],
        correct: '砂糖'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;



const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        // ここに命令を書く
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHndler = (e) => {
    if (correct === e.target.textContent){
        window.alert('正解!');
    }else {
        window.alert('不正解!');
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHndler(e);
    });
    handlerIndex++;
};

