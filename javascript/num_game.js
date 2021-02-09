
let randomNumber = Math.floor(Math.random() * 100) + 1;   
//数学算法得出一个1到100之间的随机数，Math.floor是向下取整，Math.random是0到1(不包含1)的随机数，所以需要乘以100再加上1

const guesses = document.querySelector('.guesses');  //用户输入的猜测数字
const lastResult = document.querySelector('.lastResult');  //显示猜测结果，是否正确
const lowOrHi = document.querySelector('.lowOrHi');  //提示猜错的数字是高了还是低了
//定义三个常量

const guessSubmit = document.querySelector('.guessSubmit');  //对表单提交按钮的引用
const guessField = document.querySelector('.guessField');  //对输入内容的引用

let guessCount = 1;  //定义一个计数器变量并初始化为1
let resetButton;  //对重置按钮的引用
guessField.focus();

function checkGuess(){
    let userGuess = Number(guessField.value);  //声明变量并设置为输入的值，内置Number确保值是一个数字
    if (guessCount === 1){
        guesses.textContent = "上次猜的数";  
    }  //如果是第一次猜测，显示用户猜测的数字
    guesses.textContent += userGuess + ' ';  //显示内容为之前的内容加上这次猜测的，加上’‘空格。
    if (userGuess === randomNumber){
        lastResult.textContent = '恭喜你！猜对了!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }  //如果猜测的数字等于系统取的随机数字，则执行
    else if (guessCount === 10){
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }  //针对第一个if，不是第一次猜测的话，那如果是最后一次猜测，则执行
    else {
        lastResult.textContent = '你猜错了!';
        lastResult.style.backgroundColor = 'red'; 
        //针对以上所有条件，不是第一和第十次，并且也没有猜中，则执行
        if(userGuess < randomNumber){
          lowOrHi.textContent = '你猜低了!';
        }  //如果猜测数字小于随机数，执行
        else if(userGuess > randomNumber) {
          lowOrHi.textContent = '你猜高了!'
        }  //如果猜测数字大于随机数，执行
    }  
    guessCount++;  //累加统计猜测次数.
    guessField.value = '';  //输入框清零，''代表空格
    guessField.focus();  //聚焦输入框
}

guessSubmit.addEventListener('click', checkGuess);
//为guessSubmit添加监听器，('监听类型'，当事件发生时执行的代码或函数)

function setGameOver(){
guessField.disabled = true;  //禁用输入框
guessSubmit.disabled = true;  //禁用按钮
resetButton = document.createElement('button');  //创建一个新的按钮
resetButton.textContent = '开始新游戏';  //文本为“开始新游戏”
document.body.appendChild(resetButton);  //把按钮添加到HTML的底部
resetButton.addEventListener('click', resetGame);  //监听器，当点击时调用resetGame函数
}

function resetGame(){
  guessCount = 1;  //轮数重置为1

  const resetParas = document.querySelectorAll('.resultParas p');  //删除所有段落信息
  for (let i = 0 ; i < resetParas.length; i++){
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);  //删除重置按钮

  guessField.disabled = false;  //启用输入框
  guessSubmit.disabled = false;  //启用按钮
  guessField.value = '';  //清除输入框
  guessField.focus();  //聚焦输入框

  lastResult.style.backgroundColor = 'white';  //文字背景色变为白色
  randomNumber = Math.floor(Math.random() * 100)+1;  //重新给出一个随机数字

}
