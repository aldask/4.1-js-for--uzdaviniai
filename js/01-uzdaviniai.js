//1-A
let nuo = 0;
let iki = 0;
let rez = 0;

for(let i = nuo; i <= iki; i++){
    rez += i;
}
console.log(rez);
console.log('------------------------------------');

//1-B
let nuo0 = 0;
let iki0 = 4;
let rez0 = 0;

for(let i = nuo0; i <= iki0; i++){
    rez0 += i;
}
console.log(rez0);
console.log('------------------------------------');

//1-C
let nuo1 = 0;
let iki1 = 100;
let rez1 = 0;

for(let i = nuo1; i <= iki1; i++){
    rez1 += i;
}
console.log(rez1);
console.log('------------------------------------');

//1-D
let nuo2 = 574;
let iki2 = 815;
let rez2 = 0;

for(let i = nuo2; i <= iki2; i++){
    rez2 += i;
}
console.log(rez2);
console.log('------------------------------------');

//1-E
let nuo3 = -50;
let iki3 = 50;
let rez3 = 0;

for(let i = nuo3; i <= iki3; i++){
    rez3 += i;
}
console.log(rez3);
console.log('------------------------------------');

//1-F
let nuo4 = -70;
let iki4 = 30;
let rez4 = 0;

for(let i = nuo4; i <= iki4; i++){
    rez4 += i;
}
console.log(rez4);
console.log('------------------------------------');

//2
let zodis = 'abcdef';
let apverstaszodis = '';

for(let i = zodis.length - 1; i >= 0; i--){
    apverstaszodis += zodis[i];
}
console.log(apverstaszodis);
console.log('------------------------------------');

//3
//3-1
let nuo5 = 0;
let iki5 = 11;
let dalmuo = 3
let kiek = 0;

for(let i = nuo5; i <= iki5; i++){
    if (i % dalmuo == 0){
        console.log(i)
    }
    kiek++;
}
    console.log(kiek);
