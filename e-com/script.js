fetch('https://5f74013db63868001615fe76.mockapi.io/api/v1/products').then(function(response){
         return response.json();

     }).then(function (obj){
         var str= "";
         for(i=0;i<obj.products.length;i++){

            str+="<div id='main'>";

             str+="<img src = '"+ obj.products[i].image +"'<br><br>"
             str+= "<div id='name'>" + obj.products[i].name+"</div><br>";
            
             str+= "<div id='brand'>" + obj.products[i].brand+"</div><br>";
             str+= "<div id='Price'<span>$</span>" + obj.products[i].Price+"</div><br>";
             for(j=0; j<obj.products[i].rating; j++){

                str+="<span>★</span>";
             
             }
             str+="</div>";
         }
         
         document.getElementById("showfull").innerHTML=str;
    
     }).catch(function(error) {
         
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
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }
     
     function desortByProperty(property){  
        return function(a,b){  
           if(a[property] < b[property])  
              return 1;  
           else if(a[property] > b[property])  
              return -1;  
       
           return 0;  
        }  
     }
    function sortData(){
        fetch('https://5f74013db63868001615fe76.mockapi.io/api/v1/products').then(function(response){
            return response.json();
   
        }).then(function (obj){
        var str= "";
        var ssort=document.getElementById("sort1").value;
        if(ssort=="rating"){
           obj2= obj.products;
           var sortobj=obj2.sort(desortByProperty("rating")); 
           console.log(sortobj[0].name);
         }
         else if(ssort=="lth"){
            obj2= obj.products;
            var sortobj=obj2.sort(sortByProperty("Price")); 
            console.log(sortobj[0].name);
          }
          else if(ssort=="htl"){
            obj2= obj.products;
            var sortobj=obj2.sort(desortByProperty("Price")); 
            console.log(sortobj[0].name);
          }

       for (i = 0; i < obj.products.length; i++) 
	 { 
        str+="<div id='main'>";

        str+="<img src = '"+ sortobj[i].image +"'<br><br>"
        str+= "<div id='name'>" +sortobj[i].name+"</div><br>";
       
        str+= "<div id='brand'>" + sortobj[i].brand+"</div><br>";
        str+= "<div id='Price'>" + sortobj[i].Price+"</div><br>";
        for(j=0; j<sortobj[i].rating; j++){

           str+="<span>★</span>";
        
        }
        str+="</div>";
   
    }
     document.getElementById("showfull").innerHTML=str;
     }
        
        );
	
      }
   



   
   
