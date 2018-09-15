// declare variable that holds an array with captcha questions
// create an if statement that if the for loop is false, then we return. if true, then you can go on. 

let captchaArray = ['Who is the President?', 'What is the abbreviation for District of Columbia', 'Please type \'cat\'?'];
// define a function that declares a variable, then sets it to the array that holds the correct answers to the captcha questions
let tf;
function captchaFunction() 
{
    let correctAnswer = ['Donald Trump', 'DC', 'cat'];
    // create a for loop that runs while the variable is less than the length of the captchaArray, which houses the captcha questions. Then declare a variable to store the user's answers to the captcha questions. Set a condition that if the user's answer is not equal to the correct answer, invoke alert with a string. Otherwise, once the for loop is exited, invoke alert function with its string argument. 
    for(let i = 0; i < captchaArray.length; i++) 
    {
        let result = prompt(captchaArray[i]);
        tF = (correctAnswer[i] == result);
        if(tF == false) 
        {
            alert('Sorry Robot')
            return ;    
        } else alert('Hello human'); 
    }
}
    captchaFunction()
    alert('You have the power to change destiny for our character, Ms. Mystery. Please answer the following questions with care.');

    // Function called newFunc that accepts parameters. Prompts x and returns y. 
    function newFunc(x) 
    { 
        return prompt(x);
    };

    //Invoke newFunc and return author
    let author = newFunc('What\'s your name?'); 
    console.log(author);

    //Invoke newFunc and return age
    let age = newFunc('How old is Ms. Mystery? '); 
    console.log(age);

    //Invoke newFunc and return girl 
    let girl = newFunc('Let\'s be precise. Is she a woman or a girl?'); 
    console.log(girl);

    //Confirm age and girl 
    let agree = confirm(author + " : Is Ms. Mystery a " + girl + "? " + "Is she " + age + " years old?")
    console.log(agree);
    // if false, call newFunc again twice and store responses in variables 
        if (agree === false) 
        {
            age = newFunc('How old is Ms. Mystery? Please type the digits.'); 
            girl = newFunc('Again, let\'s be precise. Is she a woman or a girl? Please type \'woman\' or \'girl\''); 
        }; 

    //Invoke newFunc and return town
    let town = newFunc('Where, geographically, does Ms. Mystery live?');
    console.log(town); 
    // call alert function by passing it an argument that includes strings and variables 
    alert('Perfect choice, ' + author + '. Ms. Mystery is going to have lots of adventures in ' + town + "."); 

    //Create function newFunc2 which uses HTML method and property 
    function newFunc2(l, m) 
    {
    let elOne = document.getElementsByClassName(l)
        for(i = 0; i < elOne.length; i++)
        {
            elOne[i].innerHTML = m; 
        }; 
    };

    //Invoke newFunc2 and pass it arguments 
    newFunc2('author', author); 
    console.log(newFunc2); 

    // Function called newFunc2. Gets element by id, using argument id1, and replaces it with a string. Sets element to equal parameter para1. 
    function newFunc3(id1, para1)
    {
        let elTwo= document.getElementById(id1)
        elTwo.innerHTML = para1; 
    }; 

    // Invoke newFunc2 three times by passing it arguments 
    newFunc3('age', age); 
    console.log(newFunc3); 
    newFunc3('girl', girl); 
    console.log(newFunc3);
    newFunc3('town', town);
    console.log(town); 