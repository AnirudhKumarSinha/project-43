class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(accessCode1,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(accessCode1 === enteredCode.toUpperCase())
            return true;
        
        else
            return false;
        
    }
    authenticate(accessCode2,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(accessCode2 === enteredCode.toUpperCase())
            return true;
        
        else
            return false;
        
    }
    authenticate(accessCode3,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(accessCode3 === enteredCode.toUpperCase())
            return true;
        
        else
            return false;
        
    }
    

}