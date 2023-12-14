var Text1="“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde"
var Text2="“You only live once, but if you do it right, once is enough.” <br> ― Mae West"
var Text3="“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” <br> ― Maya Angelou"
var Text4="“It is better to be hated for what you are than to be loved for what you are not.” <br> ― Andre Gide, Autumn Leaves"
var Text5="“Be the change that you wish to see in the world.” <br> ― Mahatma Gandhi"
var Text6="“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” <br> ― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"
var arr = [Text1,Text2,Text3,Text4,Text5,Text6];
function display(){
document.getElementById("quote").innerHTML =
arr[Math.floor(Math.random() * 6)];
}


