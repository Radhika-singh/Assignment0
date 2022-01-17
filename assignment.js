//Variables for inputboxs and buttons
var T1 = document.getElementById("Text1");
var T2 = document.getElementById("Text2");
var B1 = document.getElementById("Button1");
var B2 = document.getElementById("Button2");

//change plain text into cypher text(a->z,b->y,c->x,....,x->c,y->b,z->a,A->Z,B->Y,C->X,...,X->C,Y->B,Z->A)
//Activates when button 1 is clicked..
B1.addEventListener("click",()=>{
	//var string for cypher text
	var str="";
	//loops to traverse through length of plain text input
	for(var i=0;i<T1.value.length;i++){
	    //character at ith value in input
	    var c = T1.value.charCodeAt(i);
	    //logic for changing plain text to cypher text
	    if(c>=97 && c<=122){
	      c=219-c;
	    }else if(c>=65 && c<=90){
	      c=155-c;
	    }
	    str+=String.fromCharCode(c);
	    //store created cypher string in cypher text box value
	    T2.value=str;
	  }
});
//change cypher text into plain text(z->a,y->b,x->c,....,c->x,b->y,a->z,Z->A,Y->B,X->C,...,C->X,B->Y,A->Z)
//Activates when button 2 is clicked..
B2.addEventListener("click",()=>{
	//var string for plain text
	var str="";
	//loops to traverse through length of cypher text input
	for(var i=0;i<T2.value.length;i++){
	    //character at ith value in input
	    var c = T2.value.charCodeAt(i);
	    //logic for changing cypher text to plain text
	    if(c>=97 && c<=122){
	      c=219-c;
	    }else if(c>=65 && c<=90){
	      c=155-c;
	    }
	    str+=String.fromCharCode(c);
	    //store created plain string in plain text box value
	    T1.value=str;
	  }
});

