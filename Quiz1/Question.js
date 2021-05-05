class Question{
    constructor(){
        this.title = createElement('h1')
        this.input = createInput("Answer");
        this.button = createButton('Submit');
        this.question = createElement('h3');
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        this.title.html("The Zodiacs 1");
        this.title.position(350, 0);
        this.title.style('color', 'white');
        this.question.html("Question:- What is commonly regarded as patron of sailors?" );
        this.question.position(150, 80);
        this.question.style('color', 'white');
        this.input.position(150, 230);
        this.button.position(290, 300);
    }
}