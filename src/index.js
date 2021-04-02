import './x.js'
import png from './assets/1.png'

const div = document.getElementById('app')

div.innerHTML = `
    <img src='${png}'>
`

const button = document.createElement('button')

button.innerText = '懒加载'

button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module)=>{module.default()},()=>{})
}

div.appendChild(button)