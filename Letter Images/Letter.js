class Letter{
    constructor(x,y,Le){
        this.body = createButton(Le);
        this.body.position(x,y);
    }

    display(){
        this.body.style('background', 'yellow');
        /* this.body.mousePressed(() => {
            //lable = lable + Le;
        }); */
    }
}