const HiddenArray = [];

function getRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    
     
     
     for (let i =0 ; i< 5;i++) {
       const r = Math.floor(Math.random() * (max - min +1) + min);
       if (HiddenArray.indexOf(r) === -1) {
         HiddenArray.push(r);
       }
     }
  
    //  while (HiddenArray.length <5) {
    //     const r = Math.floor(Math.random() * (max - min +1) + min);
    //     if (HiddenArray.indexOf(r) === -1) {
    //       HiddenArray.push(r);
    //     }
    //     HiddenArray.length++;
    //   }
     
    console.log(HiddenArray);

}

getRandom(3,6);

let n1 = HiddenArray.length;


    console.log("Please enter: " + n1 + " numbers");

    const Player_guess =[];

    for (let i = 0;i < n1;i++)
    {

        const prompt = require('prompt-sync')({sigint: true});
        
        Player_guess[i] = prompt('Guess a number:');

    }
    const arrOf = Player_guess.map(str =>{
        return Number(str);
    });
    console.log(arrOf);

    let n2 = Player_guess.length;

    if(JSON.stringify(arrOf) !== JSON.stringify(HiddenArray)) 
    {
        let message ;
        let arr =[];
        let unMatchingNumbers =[];
        
        for(let i = 0; i < n1; i++ )
        {
            for(let j = 0;j < n2 ;j++)
            {
                if(HiddenArray[i] !== arrOf[j])
                {
                    //message = "The numbers are not macthing";
                    continue;
                }
                else if((i ===j) && (HiddenArray[i] === arrOf[j])) 
                {
                    arr.push(HiddenArray[i]);
                    continue;
                }else if((i !== j) && (HiddenArray[i] === arrOf[j])) {
                    unMatchingNumbers.push(HiddenArray[j]);
                    continue;
                }
                
            }
        }

        
       // console.log(message)
        console.log("numbers in their places: " + arr);
        console.log("matching numbers are not in their places: " + unMatchingNumbers);

    }
   
   
    if(JSON.stringify(arrOf) === JSON.stringify(HiddenArray))
    {
        console.log('You guessed the correct number.' + HiddenArray);
    }
