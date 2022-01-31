// 変数
let sample = 'Hello World!';

// 定数
const sample2 = 'He..Hell...Hello World!';

// 配列
let inoki = ['いーち','にー','さーん','ダーー!!'];

// ループ文
// let index = 0;
// while(index < inoki.length){
//     // 繰り返したい命令
//     console.log(inoki[index])
//     index++;
// }

// if / else
// if(inoki.length > 5){
//     console.log('ボンバイエ');
// } else {
//     console.log('ボンバ...!')
// }

// 関数
// const test = () => {
//     // ここに実行したい命令を書く
//     if(inoki.length > 5){
//         console.log('ボンバイエ');
//     } else {
//         console.log('ボンバ...!')
//     }
// };

// 引数
const test = (arg) => {
    // ここに実行したい命令を書く
    if(inoki.length > arg){
        console.log('ボンバイエ');
    } else {
        console.log('ボンバ...!')
    }
};

// オブジェクト
const sample3 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    sample: () => {
        console.log('Hello World!');
    }
};

console.log(sample3.sample());

// window.alert('Hello World')

// console.log(document.getElementsByTagName('button')[0])

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    // 命令書く
    window.alert('Hello World!')
});