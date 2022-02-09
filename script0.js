let myStore = window.localStorage;
let pow3 = 0, pow2 = 0, pow1 = 0, pow0 = 0;
let letsCompute = document.querySelector('#letsCompute');
let operator = '+'
let operators = document.querySelectorAll('.operator');
let letsCompLink = document.querySelector('#letsCompLink');
let input = document.querySelectorAll('.inputss');
let input1 = document.querySelectorAll('#input1');
let keypad = document.querySelector('.disbuttonsK')
keypad.style.visibility = 'hidden'
let flag1 = true;

window.addEventListener('click',callk)

function callk(e)
{   
    console.log(e.target.id)
    if(e.target.id == "input1" && flag1)
    {
        keypad.style.visibility = 'visible'
        input1.disabled = true
        flag1 = false
    }
    else
    {
        keypad.style.visibility = 'hidden'
        input1.disabled = false
        flag1 = true;
    }
}

function multiply(A, B)
{
    let prod = [];
    let m = A.length;
    let n = B.length;
    for (let i = 0; i < m + n - 1; i++) prod[i] = 0;
    
    for(let i = 0; i < m ; i++){
        
        for (let j = 0; j < n ; j++)
            prod[i + j] += A[i] * B[j];
    }
    return prod;
}
function compute()
{
    let str = '';
    let count1 = 0,count2 = 0;
    input.forEach(inp => {if(inp.value == 0) count1++});
    input.forEach(inp => {if(inp.value == '') count2++});
    
    if(count1 == 8 || count2 > 0)
    {
        letsCompLink.href ='#';
    }
    else
    {
        letsCompLink.href ='workspace1.html';
    }

    if(operator == '+')
    {
        pow3 = parseInt(document.querySelector('#input-1').value) + parseInt(document.querySelector('#input-5').value);
        pow2 = parseInt(document.querySelector('#input-2').value) + parseInt(document.querySelector('#input-6').value);
        pow1 = parseInt(document.querySelector('#input-3').value) + parseInt(document.querySelector('#input-7').value);
        pow0 = parseInt(document.querySelector('#input-4').value) + parseInt(document.querySelector('#input-8').value);
    }
    else if(operator == '-')
    {
        pow3 = parseInt(document.querySelector('#input-1').value) - parseInt(document.querySelector('#input-5').value);
        pow2 = parseInt(document.querySelector('#input-2').value) - parseInt(document.querySelector('#input-6').value);
        pow1 = parseInt(document.querySelector('#input-3').value) - parseInt(document.querySelector('#input-7').value);
        pow0 = parseInt(document.querySelector('#input-4').value) - parseInt(document.querySelector('#input-8').value);  
    }
    else if(operator == '*')
    {
        
        let a = []
        for(let i = 4; i>0; i--) a[4-i] = document.querySelector(`#input-${i}`).value;
        
        let b = []
        for(let i = 8; i>4; i--) b[8-i] = document.querySelector(`#input-${i}`).value;


        
        let prodArr = multiply(a,b);

        for (let i = prodArr.length-1; i >= 0 ; i--)
        {
            if(prodArr[i] != 0)
            {   
                
                if (i != prodArr.length-1)
                {
                    if(prodArr[i] > 0)
                    str += ' + ';
                }
                str += prodArr[i];
                if (i != 0 && i != 1)
                    str +="x<sup>"+i+"</sup>";
                if (i == 1)
                    str +="x";
            }
        }

        
    }

    

    
    if(operator == '+' || operator == '-')
    {
        if(pow3 != 0)
        {
            
            str += `${pow3}x<sup>3</sup>`;
        }
        if(pow2 != 0)
        {
            if(pow2 > 0)
                pow2 = ' + ' + pow2;
            
            
            str += `${pow2}x<sup>2</sup>`;
        }
        if(pow1 != 0)
        {
            if(pow1 > 0)
                pow1 = ' + ' + pow1;
            
            str += `${pow1}x`;
        }
        if(pow0 != 0)
        {
            if(pow0 > 0)
                pow0 = ' + ' + pow0;
           
            str += `${pow0}`;
        }
    }    
    
           
    if(str.charAt(1) == '+')
        str = str.substring(2);
    
    
    myStore.setItem('computedAns', str);

}

function opSelect(e)
{   
    operators.forEach(op => op.style.cssText = "background-color: rgb(26, 26, 252); border: none;")
    operator = e.target.innerHTML;
    e.target.style.cssText = "background-color: rgb(33, 129, 255); border: 2px solid cyan;";
}

input.forEach(inp => inp.addEventListener('input', e => {setTimeout(function(){if(e.target.value == '') e.target.value = '0';},6000);}));

operators.forEach(operator => operator.addEventListener('click',opSelect))


letsCompute.addEventListener('click', compute);



let calc = document.querySelector('i');
checked = true;
document.querySelector('.disbuttonsC').style.visibility = 'hidden';


calc.addEventListener('click', () => {
    
    if(checked)
    {
        document.querySelector('.disbuttonsC').style.cssText = 'transition: all 0.4s ease-in-out;transform: translate(-150px);opacity: 100%;'
        checked = false;
    }
    else
    {
        document.querySelector('.disbuttonsC').style.cssText = 'left: 10000px;transition: all 0.4s ease-in-out;transform: translate(100px);opacity: 0;'
        checked = true;
    }

})

