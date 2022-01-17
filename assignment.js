var T1 = document.getElementById("Text1");
var T2 = document.getElementById("Text2");
var B1 = document.getElementById("Button1");
var B2 = document.getElementById("Button2");

B1.addEventListener("click",()=>{
	var str="";
	for(var i=0;i<T1.value.length;i++){
	    var c = T1.value.charCodeAt(i);
	    if(c>=97 && c<=122){
	      c=219-c;
	    }else if(c>=65 && c<=90){
	      c=155-c;
	    }
	    str+=String.fromCharCode(c);
	    T2.value=str;
	    
	  }
});
B2.addEventListener("click",()=>{
	var str="";
	for(var i=0;i<T2.value.length;i++){
	    var c = T2.value.charCodeAt(i);
	    if(c>=97 && c<=122){
	      c=219-c;
	    }else if(c>=65 && c<=90){
	      c=155-c;
	    }
	    str+=String.fromCharCode(c);
	    T1.value=str;
	  }
});

