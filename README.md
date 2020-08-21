# React audio assistant 


## About

React application that can be controlled by voice. App is developed with help of react-speech-recognition package. useSpeechRecognition from that package is a React hook that gives a component access to a transcript of speech picked up from the user's microphone ([docs](https://www.npmjs.com/package/react-speech-recognition)). 

  
 
 
## How it works

Dictaphone component is the place where all magic happens. When you start the dictaphone, transcript will be taken depending on things you say on the microphone. Because microphone is recording continuosly, its important to define some command that will signal the end of the sentence.
I defenied command "Zulu", which will tell the program when you finished the sentence.

 
1. Press play button     
2. Tell something
3. Say word Zulu (pronounce 'ZOO luu') at the end of the sentence (That will check, if current transcript match some of the predefined commands)
4. Depending on transcript (things you say), program will take some action and display successful command (left side), or throw an error (right side) of window.

## Commands (Dictaphone.js)

Command | Explanation | Arguments
------------ | -------------  | ------------- 
turn off | Turns of microphone (Web Speech API)| -
reset | This command reset transcript| -
zulu | You have to say "Zulu" (pronounce 'ZOO luu'), at the end of the sentence, so app can process command.| -
navigate * | Navigate through application (change url)| home/cart/products
look for * | Set search term for product you are looking for| everything/all/ "Search term"
open * | Show details about product from the products list | first/second/third (from the list)
add to cart | Add product to cart  | -
remove * | Remove product from cart | Name of the product in cart you want to remove



 
