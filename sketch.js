const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world,brain_img,brain,bubble_img,bubble1,bubble_img,bubble,buuble2,bubble2_img,bubble1_img,bubble3_img;

var bubble3,bubble4_img,bubble4,bubble5_img,bubble5,button1,page2,text1,button2,button3,button4,button5,bubble5;
var bubble6_img,button6,button7,button8,white,back;
let mysound,text2,text3,text4,text5,text6,text7,form,background_img,button9;
let vid;
let mysound1;


function preload(){
   
    brain_img=loadImage("brain.png");
    bubble_img=loadImage("bubble1.png");
    bubble1_img=loadImage("bubble.png");
bubble2_img=loadImage("b4.png");
bubble3_img=loadImage("bubble3.png");
bubble4_img=loadImage("b5.png");
bubble5_img=loadImage("b6.png");
bubble6_img=loadImage("b7.png");
background_img=loadImage("op.png");
soundFormats("mp3","ogg");
mysound=loadSound("music2.mp3");
soundFormats("mp3","ogg");
mysound1=loadSound("music.mp3");
//vid=createVideo(["alunom.mp4"],vidLoad)
//vid.size(200,200);
}

function setup(){
    engine = Engine.create();
    world = engine.world;
     createCanvas(displayWidth,displayHeight);
   

    button1=createButton("Next");
    button2=createButton("Read");
    button3=createButton("Listen");
    button4=createButton("Write");
    button5=createButton("Meditation");
    button8=createButton("what to do");
    
    button9=createElement("button");
    button9.value="The Happiness Trap"
    back=createButton("back");
    text1=createElement("h2");
    text2=createElement("h2");
    text3=createElement("h2");
    text4=createElement("h2");
    text5=createElement("h2");
    text6=createElement("h2");
    text7=createElement("h2");
    form=new Form();
}



function draw(){
    Engine.update(engine);
    background(255);
    imageMode(CENTER) ;
    //console.log(canvas.width)
    //console.log(canvas.height);
image(brain_img,displayWidth/2,displayHeight/2);
//Bubble();
bubble1=createSprite(displayWidth/2+230,displayHeight/3);

bubble1.addImage(bubble_img);
bubble=createSprite(displayWidth/2-100,displayHeight/2);

bubble.addImage(bubble1_img);

bubble3=createSprite(displayWidth/2,displayHeight/2+300)

bubble3.addImage(bubble3_img);
bubble2=createSprite(displayWidth/2+400,displayHeight/2+250)
bubble5=createSprite(displayWidth/2-500,displayHeight/2+150);
bubble5.addImage(bubble5_img);

bubble2.addImage(bubble2_img);
bubble4=createSprite(displayWidth/2+400,displayHeight/2)


bubble4.addImage(bubble4_img);

bubble5=createSprite(displayWidth/2+800,displayHeight/2+150);
bubble5.addImage(bubble6_img)
text1.position(displayWidth/3,displayHeight/12-50);
text1.html("These are the main causes of depression");
button1.position(displayWidth/2-10,displayHeight/2+350);

button1.mousePressed(()=>{
   

    button1.hide();
    text1.hide()
    background("white")
   // tint(255,0);
    page1();
    console.log(page1);
   
   // bubble1.distroy();
   
})
   drawSprites()
}


function Bubble() {
   
    //imageMode(CENTER) ;
//image(bubble_img,random(20,displayWidth-20),random(20,displayHeight-20));
bubble1=createSprite(displayWidth/2+230,displayHeight/3);

bubble1.addImage(bubble_img);
bubble=createSprite(displayWidth/2-100,displayHeight/2);

bubble.addImage(bubble1_img);

bubble3=createSprite(displayWidth/2,displayHeight/2+300)

bubble3.addImage(bubble3_img);
bubble2=createSprite(displayWidth/2+400,displayHeight/2+250)
bubble5=createSprite(displayWidth/2-500,displayHeight/2+150);
bubble5.addImage(bubble5_img);

bubble2.addImage(bubble2_img);
bubble4=createSprite(displayWidth/2+400,displayHeight/2)


bubble4.addImage(bubble4_img);

bubble5=createSprite(displayWidth/2+800,displayHeight/2+150);
bubble5.addImage(bubble6_img)
//textSize(26)
//text("These are the main causes of depression",displayWidth/3,displayHeight/12);
text1.position(displayWidth/3,displayHeight/12-50);
text1.html("These are the main causes of depression");
button1.position(displayWidth/2-10,displayHeight/2+350);

button1.mousePressed(()=>{
   

    button1.hide();
    text1.hide()
    background("white")
   // tint(255,0);
    page1();
    console.log(page1);
   
   // bubble1.distroy();
   
})
}

//after next
function page1(){
    
    
    //this.Visiblity=255;

//this.Visiblity = this.Visiblity - 5;
//tint(255,0);
background("pink");
//read
button2.position(displayWidth/2-300,displayHeight/3);
button2.size(displayWidth/2,100)
//listen
button3.position(displayWidth/2-300,displayHeight/6);
button3.size(displayWidth/2,100)
//write
button4.position(displayWidth/2-300,displayHeight/2);
button4.size(displayWidth/2,100)
//meditatae
button5.position(displayWidth/2-300,displayHeight/1.5);
button5.size(displayWidth/2,100)
//what to dozxdr
button8.position(displayWidth/2-300,displayHeight/1.2);
button8.size(displayWidth/2,100)

    console.log("hello");
    //read
    button2.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button5.hide();
        button8.hide();
        page6();
    })
    //listen
    button3.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button5.hide();
        button8.hide();
        page2();
    });
    //write
    button4.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button5.hide();
        button8.hide();
        page7();
    })
    button5.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button5.hide();
        button8.hide();
       // vidLoad();
    })



    //what to do
    button8.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button5.hide();
        button8.hide();
        page5();
       })
    }
    
    function page2(){
        background("black")
        button6=createButton("Soothing Relaxation");
    button7=createButton("piano");
        
       // console.log("balle balle");
       //soothing relaxation inside lisen
        button6.position(displayWidth/2-350,displayHeight/2-120);
        button6.size(displayWidth/2,100);
//piano inside listen
        button7.position(displayWidth/2-350,displayHeight/2-10);
        button7.size(displayWidth/2,100);

        back.position(displayWidth/2+200,displayHeight/2+259);
        back.mousePressed(()=>{
            back.hide();
            page4();
            //button2.visible=true;
            //page1();
          //button3.visible=true;
            //button4.visible=true;
           //button5.visible=true;
            //button8.visible=true;
        })
        //hiding sr
       button6.mousePressed(()=>{
           button6.hide();
           button7.hide();
           page3();
       })
       //hiding piano
       button7.mousePressed(()=>{
        button6.hide();
        button7.hide();
        page4();
       })
      
    }
    //listen==soothing relaxation
    function page3(){
        let cnv=createCanvas(displayWidth,displayHeight)
       cnv.mousePressed(canvasPressed);
        text2.position(displayWidth/2-60,displayHeight/2+300);
text2.html("Click anywhere to start the music");
    }
    //music for soothing relaxataion
    function canvasPressed(){
        mysound.play();
    }
    //for piano
   function page4(){
       let cnv1=createCanvas(displayWidth,displayHeight);
      cnv1.mousePressed(canvasPressed2);
       text3.position(displayWidth/2-60,displayHeight/2+300);
       text3.html("Click anywhere to start the music");
        
    }
    //for piano
    function canvasPressed2(){
        mysound1.play();
    }
    //for what to do
    function page5(){
        console.log("chirag");
      
        text4.position(displayWidth/2-300,displayHeight/3);
text4.html("2)Do meditation daily for 10 to 15 minute");
text5.position(displayWidth/2-300,displayHeight/6);
text5.html("1)listen music daily for 15 to 20 minutes")
text6.position(displayWidth/2-300,displayHeight/1.5);
text6.html("4)play games every day for 5 minutes")
text7.position(displayWidth/2-300,displayHeight/2);
text7.html("3)daily read a book for 15 minutes");
    }
    function page7(){
        white=createSprite(1366,768);
       strokeWeight(3);
      stroke("black");
     // console.log(canvas.width)
     // console.log(canvas.height);
        white.scale=15;
        white.addImage(background_img);
        bubble1.visible=false;
form.display();
    }
    function page6(){
button9.position(displayWidth/2,displayHeight/2);
if(button9.onclick=true){
    window.location.href="http://www.goyourownway.org/GOYOUROWNWAY/DOCUMENTS/VETERANS/PENDING/Happiness%20Trap,%20The%20-%20Harris,%20Russ.pdf"
}
    }
    //function vidLoad(){
      //  vid.move();
      //  vid.volume(0);
   // }
  
    
    
