const container = document.querySelector('.content');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const initialGridNumber = 16;

function createGridHolder()
{
    const gridHolder = document.createElement('div');
    gridHolder.style.display = 'flex';
    gridHolder.style.flexDirection = 'column';
    gridHolder.style.width = '100%'
    gridHolder.style.height = '100%'
    return gridHolder;
}

container.appendChild(getNewGrid(initialGridNumber));
btn.addEventListener('click',updateGrid)
function updateGrid()
{
    let newGridNumber = parseInt(input.value);
    if(isNaN(newGridNumber)) return alert(`Please eneter a number`);
    if(newGridNumber > 100 || newGridNumber <1) 
        return alert(`Your number should be between 0 and 100`);
    
    {
        let firstChild = container.firstElementChild;
        container.removeChild(firstChild);
        container.appendChild(getNewGrid(newGridNumber));
    }
}
function getNewGrid(gridNumber)
{
    let gridHolder = createGridHolder();
    for(let i = 0; i< gridNumber; i++)
    {
        let div = document.createElement('div');
        div.style.border = '1px black solid';
        div.style.backgroundColor = `red`;
        div.style.flex = '1 1 auto';
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        div.style.boxSizing = 'border-box';
        for(let i = 0; i< gridNumber; i++)
        {
            let childDiv = document.createElement('div');
            childDiv.style.boxSizing = 'border-box';
            childDiv.style.border = '1px black solid';
            childDiv.style.backgroundColor = `yellow`;
            childDiv.style.flex = '1 1 auto';
            div.appendChild(childDiv);
        }
        gridHolder.appendChild(div);
    }
    return gridHolder;
}
