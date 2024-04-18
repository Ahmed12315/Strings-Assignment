//string lenght calculator

var sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
console.log(sentence)  
console.log("your sentence  legnth is  "+ sentence.length);

// string to Uppercase 
var userName ="Ahmed"; 
userName = userName.toUpperCase();
console.log(userName);

//string to lowercase
var userName = "AHMED";
userName = userName.toLowerCase();
console.log(userName);


//count specific character 
var sentence = "Wow! what a beautiful shot."
for(var i = 0; i < sentence.length; i++){
   if(sentence.charAt(i) === "!" || sentence.charAt(i) === "#" ||sentence.charAt(i) === "$"){
        console.log(i);
        alert("Exclamation mark found!");
        break;
    }
}    

//Count Vowels and Consonants
 var string = prompt("enter string to check vowels");
var counter = 0;
for(var i = 0; i < string.length; i++){
   if(string[i]=== "a" || string[i]=== "e" || string[i]=== "i" || string[i]=== "o" || string[i]=== "u"){
       counter++;
    }
}
console.log(string + " have " + counter + " vowels" + " and " + string.length + " consonants ");


//Word Count in String
var str = "lorem ipsum dolor sit amet, consectetur adipisicing elit."
console.log(str);
str = str.split(' ')
console.log("there are "+ str.length + " words in senteance");



// Count the occurrences of a specific character within a string.
var string = prompt("enter string");
var letter = prompt("enter letter");
var counter = 0;
for(var i =0; i < string.length; i++){
    if(string[i] == letter){
        counter++
    }
}
console.log(string +" => " +letter + " => "+ counter   );


//trim whitespace
var email = "   ahmed7383839@gmail.com    "
email = email.trim();
console.log(email);

//Capitalize Each Word
var str = "lorem ipsum dolor sit amet, consectetur adipisicing elit.";
var str = str.split(" ");
for (var i = 0; i < str.length; i++) {
    var capital = str[i][0].toUpperCase() + str[i].slice(1)
    console.log(capital);
}
