fetch('https://5f74013db63868001615fe76.mockapi.io/api/v1/products').then(function(response){
         return response.json();

     }).then(function (obj){
         var str= "";
         for(i=0;i<obj.products.length;i++){

            str+="<div id='main'>";

             str+="<img src = '"+ obj.products[i].image +"'<br><br>"
             str+= "<div id='name'>" + obj.products[i].name+"</div><br>";
            
             str+= "<div id='brand'>" + obj.products[i].brand+"</div><br>";
             str+= "<div id='Price'>" + obj.products[i].Price+"</div><br>";
             for(j=0; j<obj.products[i].rating; j++){

                str+="<span>★</span>";
             
             }
             str+="</div>";
         }
         
         document.getElementById("showfull").innerHTML=str;
    
     }).catch(function(error) {
             console.error('yyyerrr');
             console.error(error);

         
     });

     function formSearch(){
        fetch('https://5f74013db63868001615fe76.mockapi.io/api/v1/products').then(function(response){
            return response.json();
   
        }).then(function (obj){
        var str= "";
       var sname= document.getElementById("sbox").value;
       for (i = 0; i < obj.products.length; i++) 
	 { 
	 var oname=obj.products[i].name;
	 var obrand=obj.products[i].brand;
	 if(oname.toLowerCase().includes(sname.toLowerCase())==true){
        str+="<div id='main'>";

        str+="<img src = '"+ obj.products[i].image +"'<br><br>"
        str+= "<div id='name'>" + obj.products[i].name+"</div><br>";
       
        str+= "<div id='brand'>" + obj.products[i].brand+"</div><br>";
        str+= "<div id='Price'>" + obj.products[i].Price+"</div><br>";
        for(j=0; j<obj.products[i].rating; j++){

           str+="<span>★</span>";
        
        }
        str+="</div>";
    }
   else if(obrand.toLowerCase().includes(sname.toLowerCase())==true){
        str+="<div id='main'>";

        str+="<img src = '"+ obj.products[i].image +"'<br><br>"
        str+= "<div id='name'>" + obj.products[i].name+"</div><br>";
       
        str+= "<div id='brand'>" + obj.products[i].brand+"</div><br>";
        str+= "<div id='Price'>" + obj.products[i].Price+"</div><br>";
        for(j=0; j<obj.products[i].rating; j++){

           str+="<span>★</span>";
        
        }
        str+="</div>";
    }
     document.getElementById("showfull").innerHTML=str;
     }
     
	
      }
    );
    }
