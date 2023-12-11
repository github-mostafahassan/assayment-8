


var x = [ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, veritatis...." , "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque quidem pariatur in quos saepe.." , " consectetur adipisicing elit. Exercitationem itaque quidem pariatur in quos saepe." , "Lorem ipsum dolor sit amet consectetur adipisicing elit."];



for(var i = 0 ; i < x.length ; i++){

    btn.addEventListener('click' , function(){


                document.getElementById("test").innerHTML = x[0];
        
        
                btn.addEventListener('click' , function(){
        
        
                    document.getElementById("test").innerHTML = x[1];
        
        
                    btn.addEventListener('click' , function(){
        
        
                        document.getElementById("test").innerHTML = x[2];
                
                        btn.addEventListener('click' , function(){
        
        
                            document.getElementById("test").innerHTML = x[3];
        
                            btn.addEventListener('click' , function(){
        
        
                        });
                    });
                });
            });
        });
    
}

