Website link:https://jinheeyi.github.io/workshop_6/

## Introduction

- Critically thinking about on working with text and language, I thought about making like a little therapy meeting. Even there's no answers shown up, but just spilling out every words that you kept hidden or don't want to talk about, will appear on the screen. There were times I've been experienced with heavy words that I carried, which were very difficult with me. It's like **'spilling the beans'** onto the screen, where it lets them display on the screen. This idea was to create for the typer to feel comfortable without hesistation and everything about struggling, or very emotional thoughts flow onto the screen. 
- I've just learnt on changing the new font by downloading it from https://www.jetbrains.com/lp/mono/#key-features. I decided to get the download of the font, 'Thin Italic' and copy and put it in the 'workshop-5' folder, and showed like this.

![Screenshot 2025-01-25 140439](https://github.com/user-attachments/assets/cf5af295-ba9c-45dc-b2fa-07f57e480435)
_using this website on downloading the fonts._
![Screenshot 2025-01-24 160225](https://github.com/user-attachments/assets/9229c514-883e-4d1d-8dde-553b121dc65a)
- https://editor.p5js.org/aherstowski/sketches/jMBJGlRbk / this is the example of the work, only but the paragraph, not normally focusing the slider. 

## Notes(working progress)


_**writing the sentence and showing on the screen**_
```ruby
function draw(){
  background(220);
  text('Hello there, Im your supporter. ', 40,50);
  text(s,40,70);
  writeSentence();
}
```

_**input field + buttons**_
````ruby
function setup(){
  createCanvas(400,500);
  textFont(font1)
  userInput=createInput()
  userInput.position(40,100);
  button = createButton('enter');
  button.position(userInput.x, userInput.y+20);
  button.mousePressed(newLine);
}
```
![Screenshot 2025-01-22 135017](https://github.com/user-attachments/assets/2c18e070-c3fe-41c5-ad07-c1da1fc17e14)
![Screenshot 2025-01-25 141604](https://github.com/user-attachments/assets/9bb3eb32-a4ea-4fd6-a08a-3d2520cfa1a7)

## Conclusion(+ further improvement)
