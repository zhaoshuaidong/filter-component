import init from './init/index.js';
import store from './store/index.js';
export const personArr = [
    {name: '王一', src: './src/assets/img/3.png', des: '颈椎不好', sex: 'm', age: 18}, 
    {name: '刘一', src: './src/assets/img/5.png',des: '我是谁', sex: 'f', age: 23}, 
    {name: '王二', src: './src/assets/img/4.png', des: '我很好看', sex: 'f', age: 25}, 
    {name: '刘二', src: './src/assets/img/1.png', des: '你没有见过陌生的脸', sex: 'm', age: 15}, 
    {name: '刘三', src: './src/assets/img/2.png', des: '瓜皮刘', sex: 'm', age: 20}
];
const oUl = document.getElementsByTagName('ul')[0];
const state = store.getState();
export const oInput = document.getElementsByTagName('input')[0];
export const btn = document.getElementsByClassName('btn');
export function render(arr){
    let str = '';
    arr.forEach(item => {
        str += `<li>
            <img src=${item.src}>
            <p class="name">${item.name}</p>
            <p class="des">${item.des}</p>
        </li>`
    });
    oUl.innerHTML = str
}
init();
render(personArr);
