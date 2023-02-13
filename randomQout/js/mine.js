let btn =document.getElementById('btn1'); 
let output=document.getElementById('output'); 
/*var Qouts =[
    " '“Be yourself; everyone else is already taken  ― Oscar Wilde",  
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein `, 
    `“So many books, so little time.”
    ― Frank Zappa `, 
    `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero `, 
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch  ` , 
    `“You only live once, but if you do it right, once is enough.”
    ― Mae West`, 
    `“In three words I can sum up everything I've learned about life: it goes on.”
    ― Robert Frost ` 



]; */ 
const Qouts = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];
 function qout(){ 

    var randomQout=Number.parseInt(Math.random()*Qouts.length)
    output.innerHTML=randomQout;

    var randomQout= Qouts[Math.floor(Math.random*Qouts.length)]
    output.innerHTML=randomQout; } 


    //==================================================== 
    function generateQuote(){
        var random = Number.parseInt(Math.random()*Qouts.length + 1);
        document.querySelector('#output').textContent = `${Qouts[random].quote}`;
        document.querySelector('#author').textContent = `--${Qouts[random].author}`;
        
    }  

    btn.addEventListener('click',generateQuote);// display aouthor only ?
   btn.addEventListener('click',generateQuote); // display undefind 
