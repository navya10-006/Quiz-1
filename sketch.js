const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;

var engine,world;
var quiz,question,a,b,c,d,e,al,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
var dash;
var bg;

function preload(){
    bg = loadImage("bg.jfif");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    quiz = new Quiz1();
    question = new Question();
    a = new Letter(windowWidth-300,100,"A");
    b = new Letter(windowWidth-250,100,"B");
    c = new Letter(windowWidth-200,100,"C");
    d = new Letter(windowWidth-150,100,"D");
    e = new Letter(windowWidth-100,100,"E");
    f = new Letter(windowWidth-300,150,"F");
    g = new Letter(windowWidth-250,150,"G");
    h = new Letter(windowWidth-200,150,"H");
    i = new Letter(windowWidth-150,150,"I");
    j = new Letter(windowWidth-100,150,"J");
    k = new Letter(windowWidth-300,200,"K");
    l = new Letter(windowWidth-250,200,"L");
    m = new Letter(windowWidth-200,200,"M");
    n = new Letter(windowWidth-150,200,"N");
    o = new Letter(windowWidth-100,200,"O");
    p = new Letter(windowWidth-300,250,"P");
    q = new Letter(windowWidth-250,250,"Q");
    r = new Letter(windowWidth-200,250,"R");
    s = new Letter(windowWidth-150,250,"S");
    t = new Letter(windowWidth-100,250,"T");
    u = new Letter(windowWidth-300,300,"U");
    v = new Letter(windowWidth-250,300,"V");
    w = new Letter(windowWidth-200,300,"W");
    x = new Letter(windowWidth-150,300,"X");
    y = new Letter(windowWidth-100,300,"Y");
    z = new Letter(windowWidth-200,350,"Z");
}

function draw(){
    background(bg);
    Engine.update(engine);
    question.display();
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    i.display();
    j.display();
    k.display();
    l.display();
    m.display();
    n.display();
    o.display();
    p.display();
    q.display();
    r.display();
    s.display();
    t.display();
    u.display();
    v.display();
    w.display();
    x.display();
    y.display();
    z.display(); 
}