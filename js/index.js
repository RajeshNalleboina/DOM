function jsonFile(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("application/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState === 4 && ajaxCall.status =="200"){
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}

// call the function

jsonFile("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data.mydata);
    details(data.details);
    arrData(data.mydata);
    
})

var body=document.querySelector("#root");
console.log(body);
var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);

// creating artical1
var art1=document.createElement("artical");
art1.setAttribute("class","artical1");
main.appendChild(art1);

// create image
var image=document.createElement("img");
image.src="#";
image.alt="Profile Image";
art1.appendChild(image);

// create a function to get the object data
function details(mydetails){
    // create element for get the object name
    var h2=document.createElement("h2");
    h2.textContent=mydetails.name;
    h2.style.color="red";
    art1.appendChild(h2);

    // create h4 email
    let email=document.createElement("h4");
    email.textContent=mydetails.email;
    art1.appendChild(email);
    // create h4 phone no here
    let mob=document.createElement("h4");
    mob.textContent=mydetails.mobile;
    art1.appendChild(mob);
// button creation
    let btn=document.createElement("a");
    btn.textContent="Profile";
    btn.href="#";
    btn.style.textDecoration="none";
    art1.appendChild(btn);
}

function arrData(arrdetails){
    for(i in arrdetails){
        let art1=document.createElement("artical");
        art1.setAttribute("class","artical2");
        main.appendChild(art1);

        // create image
        var image=document.createElement("img");
        image.src="#";
        image.alt="Profile Image";
        art1.appendChild(image);
        // create element for get the object name
        let h2=document.createElement("h2");
        h2.textContent=arrdetails[i].name;
        h2.style.color="red";
        art1.appendChild(h2);

        // create h4 email
        let email=document.createElement("h4");
        email.textContent=arrdetails[i].email;;
        art1.appendChild(email);
        // create h4 phone no here
        let mob=document.createElement("h4");
        mob.textContent=arrdetails[i].mobile;
        art1.appendChild(mob);
    // button creation
        let btn=document.createElement("a");
        btn.textContent="Profile";
        btn.href="#";
        btn.style.textDecoration="none";
        art1.appendChild(btn);
    }
}



// (
//     function(){
//         function filesGetting(file,callback){
//             var ajaxCall=new XMLHttpRequest();
//             ajaxCall.overrideMimeType("aplication/json");
//             ajaxCall.open("GET",file,true);
//             ajaxCall.onreadystatechange=function(){                
//                 if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
//                     callback(ajaxCall.responseText);
//                     console.log(ajaxCall.status.responseText);

//                 }
//             }
//             ajaxCall.send(null);

//         }
//         filesGetting("data.json",function(jsondata){
//             var data=JSON.parse(jsondata);
//             console.log(data);
            

//         })
//     }
// )


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
        
        
        
