const MAX_WIDTH = 960;
const container = document.querySelector('.content');
let gridNumber = 100;
for(let i = 0; i< gridNumber; i++)
{
    let str = 'red';
    let maxHeight = MAX_WIDTH/gridNumber;
    let div = document.createElement('div');
    div.style.border = '1px black solid';
    div.style.backgroundColor = `${str}`;
    div.style.flex = '1 1 auto';
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    for(let i = 0; i< gridNumber; i++)
    {
        let childDiv = document.createElement('div');
        childDiv.style.border = '1px black solid';
        childDiv.style.backgroundColor = `yellow`;
        childDiv.style.flex = '1 1 auto';
        div.appendChild(childDiv);
    }
    container.appendChild(div);
}