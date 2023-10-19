String = " Java Is open source language and Javascript Is scripting language. java Is very user-friendly and easy to use";

//1
pattern = /Java/; 
new_text = String.replace(pattern, "Python");
console.log(new_text)
console.log('----------------------------');

//2
pattern = /java/gi; 
new_text = String.replace(pattern, "python");
console.log(new_text)   
console.log('----------------------------');

//3
pattern1 = /Java/gi;  
new_text1 = String.replace(pattern1, "Hello");
console.log(new_text1)
console.log('----------------------------');

//4
pattern2 = /Is/gi;  
new_text2 = String.replace(pattern2, "are");
console.log(new_text2)  
console.log('----------------------------');