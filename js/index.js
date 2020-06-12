(
    function(){
        function filesGetting(file,callback){
            var ajaxCall=new XMLHttpRequest();
            ajaxCall.overrideMimeType("aplication/json");
            ajaxCall.open("GET",file,true);
            ajaxCall.onreadystatechange=function(){
                console.log("gsdf");
                
                if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
                    callback(ajaxCall.responseText);
                    console.log(ajaxCall.status.responseText);

                }
            }
            ajaxCall.send(null);

        }
        filesGetting("data.json",function(jsondata){
            var data=JSON.parse(jsondata);
            console.log(data);
            

        })
    }
)


//  // get the body tag
//         // var body=document.getElementById("root");

//         var body=document.querySelector("#root");

//         console.log(body);
//         // create section 
//         var main=document.createElement("section");
//         // classname to the section
//         main.classList.add("main");
//         // append main section to the body tag
//         body.appendChild(main);

//         // create card1
//         var card1=document.createElement("article");
//         card1.setAttribute("class","card1");
//         main.appendChild(card1);

//         // create Image tag
//         var image=document.createElement("img");
//         image.src="images/img.jpg";
//         image.alt="Profile Image";
//         card1.appendChild(image);
//         // creare line
//         card1.appendChild(document.createElement("hr"));
//         // h2 for name
//         // var name=document.createElement("h2");
//         var name1=document.createElement("h2");
//         name1.textContent="Rajesh Nalleboina";
//         console.log(name1);
//         card1.appendChild(name1);
//         // careate email
//         var email=document.createElement("h4");
//         email.textContent="rajesh.n@apssdc.in";
//         card1.appendChild(email);

//         // mobile number also
//         var mobile=document.createElement("h4");
//         mobile.textContent="9100965113";
//         card1.appendChild(mobile);

//         // create artical2
//         var card2=document.createElement("article");
//         card2.setAttribute("class","card1");
//         main.appendChild(card2);

//         // create Image tag
//         var image=document.createElement("img");
//         image.src="images/img.jpg";
//         image.alt="Profile Image";
//         card2.appendChild(image);
//         // creare line
//         card2.appendChild(document.createElement("hr"));
//         // h2 for name
//         // var name=document.createElement("h2");
//         var name1=document.createElement("h2");
//         name1.textContent="Rajesh Nalleboina";
//         console.log(name1);
//         card2.appendChild(name1);
//         // careate email
//         var email=document.createElement("h4");
//         email.textContent="rajesh.n@apssdc.in";
//         card2.appendChild(email);

//         // mobile number also
//         var mobile=document.createElement("h4");
//         mobile.textContent="9100965113";
//         card2.appendChild(mobile);
        
        
        
