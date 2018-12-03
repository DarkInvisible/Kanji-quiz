//THE AREA WHEARE THE KANJI GOES
const kanji = document.querySelector('.kanji');

//THE AREA WHERE THE USER TYPES THE ROMAJI

const input = document.getElementById('input');

//THE BUTTON THE USER CLICKS TO CHECK THEIR ANSWER

const check = document.getElementById('check');

const kanjiObj = {
    jin:　"人",
    shin: "新",
    eki: "駅",
    den: "電",
    uchi: "家",
    sha: "車",
    ai: "愛"
}
console.log(kanjiObj);

const kanjiValue = Object.values(kanjiObj);

const kanjiKey = Object.keys(kanjiObj);

let counter = 0;

let nowKanji = kanjiValue[counter];

let nowRomaji = kanjiKey[counter];

check.addEventListener('click',function(){
    if(input.value === nowRomaji){
        displayCorrect();
        sayCorret();
    }
    else{
        displayInCorrect();
    }
});

function displayCorrect(){
  
    counter++;
    nowKanji = kanjiValue[counter];
    nowRomaji = kanjiKey[counter];
    kanji.innerHTML = nowKanji;
    input.value = ''
    console.log(counter);
   
}

function displayInCorrect(){
    kanji.innerHTML = "wrong";
    kanji.style
    setTimeout(function(){
        kanji.innerHTML = nowKanji;
    }, 1000);
}

function sayCorret(){
    if(counter < kanjiValue.length){
        kanji.innerHTML = "Correct"
        setTimeout(function(){
            kanji.innerHTML = nowKanji
        }, 1000)
    } else {
        kanji.innerHTML = "Good luck with JLPT n1"
    }
}

console.log(setTimeout);
console.log(kanji);
console.log(input);
console.log(check);