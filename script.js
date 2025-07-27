// let data=[
//     {
//         Q:"Who is the Atri ",
//         a:"Anush Acharya",
//         b:"Bibek Ghimire",
//         c:"Bibek Panthi",
//         d:"Bikram Bhushal",
//         ans:"ans1"
//     },
//       {
//         Q:"Who is Birkhe?",
//         a:"Anush Acharya",
//         b:"Bibek Ghimire",
//         c:"Bibek Panthi",
//         d:"Bikram Bhushal",
//         ans:"ans4"
//     },
//       {
//         Q:"Who is the mutthal before going to Gym",
//         a:"Anush Acharya",
//         b:"Bibek Ghimire",
//         c:"Bibek Panthi",
//         d:"Bikram Bhushal",
//         ans:"ans2"
//     },
//       {
//         Q:"Who is the king of Mtthi",
//         a:"Anush Acharya",
//         b:"Bibek Ghimire",
//         c:"Bibek Panthi",
//         d:"Bikram Bhushal",
//         ans:"ans3"
//     }
// ];


// let question=document.getElementById("question");
// let option1=document.getElementById("option1");
// let option2=document.getElementById("option2");
// let option3=document.getElementById("option3");
// let option4=document.getElementById("option4");
// let Myscore=document.querySelector(".myscore");
// let nextbtn=document.getElementById("Click");

// let num=0;
// let score=0;
// let answer=document.querySelectorAll(".opt");
// question.innerHTML=data[num].Q;
// option1.innerHTML=data[num].a;
// option2.innerHTML=data[num].b;
// option4.innerHTML=data[num].c;
// option3.innerHTML=data[num].d; 

// nextbtn.addEventListener("click",function(){
//   let CheckedAns=checkAns();

// if(CheckedAns == data[num].ans){
// score++;


// }
// num++;

// if(num<data.length){
// question.innerHTML=data[num].Q;
// option1.innerHTML=data[num].a;
// option2.innerHTML=data[num].b;
// option4.innerHTML=data[num].c;
// option3.innerHTML=data[num].d; 
// }
// else{
// Myscore.innerHTML=` You Scored ${score}/${data.length} 
// <br><br>

// <button onclick="location.reload()"  class="Refresh">Play Again <button/>
// `

//    nextbtn.style.display='none';

   
// }


// })
// //checking the answer
// function checkAns(){
//   let Ans;
//   answer.forEach((el)=>{
// if(el.checked){
//   Ans=el.id;
//   console.log(Ans);
// }

//   })
//   return Ans;
// }





let data=[
    {
        Q:" Capital City of Nepal ",
        a:"Biratnagar",
        b:"Kapilvastu",
        c:"Kathmandu",
        d:"Butwal",
        ans:"ans1"
    },
    {
        Q:"Who is the first Prime Minister of Nepal",
        a:"BP koirala",
        b:"Kp oli",
        c:"Sher Bahadur Deuba",
        d:"Madan Bhadari",
        ans:"ans4"
    },
    {
        Q:"Whre was Nepathya College located at first?",
        a:"Thamel Bazar",
        b:"Finance Chowk",
        c:"Bus Park",
        d:"Manigram",
        ans:"ans2"
    },
    {
        Q:"Who is the king of Nepathya College",
        a:"Anush Acharya",
        b:"Bibek Ghimire",
        c:"Bibek Panthi",
        d:"Bikram Bhushal",
        ans:"ans3"
    }
];

let question=document.getElementById("question");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");
let option4=document.getElementById("option4");
let Myscore=document.querySelector(".myscore");
let nextbtn=document.getElementById("Click");

let num=0;
let score=0;
let answer=document.querySelectorAll(".opt");

// Initial question load
loadQuestion();

nextbtn.addEventListener("click",function(){
    let CheckedAns=checkAns();
    
    if(CheckedAns == data[num].ans){
        score++;
    }
    num++;
    
    if(num<data.length){
        loadQuestion();
    }
    else{
        Myscore.innerHTML=`You Scored ${score}/${data.length} 
        <br><br>
        <button onclick="location.reload()" class="Refresh">Play Again</button>`;
        nextbtn.style.display='none';
    }
});

function loadQuestion() {
    // Uncheck all radio buttons
    answer.forEach(el => el.checked = false);
    
    // Load new question
    question.innerHTML=data[num].Q;
    option1.innerHTML=data[num].a;
    option2.innerHTML=data[num].b;
    option3.innerHTML=data[num].c;  // Fixed: option3 should get c
    option4.innerHTML=data[num].d;  // Fixed: option4 should get d
}

function checkAns(){
    let Ans;
    answer.forEach((el)=>{
        if(el.checked){
            Ans=el.id;
            console.log(Ans);
        }
    });
    return Ans;
}






