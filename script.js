'use strict';


 
 let score = 20 ;
 let highscore = 0;

  // set random between 1 and 20 .
  let secretNumber = Math.trunc(Math.random()*20) + 1;
  let secretNum = secretNumber;
  
  const displayMess = function (message) {
    document.querySelector('.message').textContent = message;
  };
 
 
  // to  get the secret number and load it to  html  element 
  document.querySelector('.number').textContent = 
  secretNumber ;

 /* 
 to program logices of click button ('Check')
 */
 document.querySelector('.check').addEventListener
  ('click', function () {
    const guest = Number(document.querySelector('.guess').value);
   if(!guest)
   {
    document.querySelector('.message').textContent = ' No number !';
   }
   // when player  wins 
   else if ( guest === secretNumber)
   {
   
   displayMess('Correct Number !');
   
   //green background 
   document.querySelector('.number').textContent = secretNumber;
   document.querySelector('body').style.backgroundColor ='#60b347'
   document.score++;
   
   if(score > highscore)
   {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
   }
  } 
  // when guess id  too high 
  else if (guest > secretNumber)
  {
    if(score>0)
    {
   
       displayMess(' Too High !');
      // decreas score number for every fail attemp
      score--;
      document.querySelector('.score').textContent =
      score ;
    }
    
    else
    {
    
    displayMess(' You Lost the game');
    document.querySelector('.score').textContent = 
    0;
      }

  }
  // when guess is too low 
  else if (guest < secretNumber)
  {
      // decreas score number for every fail attemp 
     
     displayMess(' To Low !');
     score--;
     document.querySelector('.score').textContent =
     score ;

  
  }
});
 
  /*
  the implementation of Again button.
  */
  document.querySelector('.again').addEventListener
  ('click', function()
  {
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    document.querySelector('.message').textContent = 
    ' Geuss It Again !';
      
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.number').textContent = ' ? ';
    document.querySelector('.geuss').textContent = '';
   
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width ='15rem';
}    
  );