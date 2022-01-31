let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

function save()
{
    var name=document.getElementById('name').value;
    if(name.length==0)
    {
alert("Invalid");
    }
    else             
    {
       // var url=`https://restcountries.com/v3.1/name/india`;   
        var url=`https://restcountries.com/v3.1/name/${name}`;
var xhr= new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange=()=>
{
    if(xhr.readyState==4 && xhr.status==200)
    {
        var m=JSON.parse(xhr.responseText);
        console.log(m);
        var x=document.getElementById("data");
        for(var i=0;i<m.length;i++)
        {
            var temp=document.createElement("div");
               temp.style.width="90%";
            temp.setAttribute('id','add');
            var z=document.createElement("p");
            z.innerHTML=`Country Name: ${m[i].name.common}`; 
            z.style.padding="4px";
            var b1=document.createElement("p");
            b1.innerHTML=`Flag: <img src="${m[i].flags.png}"style='width:30rem;height:20rem'/>`;  
           b1.style.padding="8px";
            var b2=document.createElement("p");
            b2.innerHTML=`Capital: ${m[i].capital}`; 
            b2.style.padding="4px";
            var b3=document.createElement("p");
            b3.innerHTML=`Population: ${m[i].population}`;  
           b3.style.padding="4px";
           var b4=document.createElement("p");
            b4.innerHTML=`Languages Spoken: ${m[i].languages.eng}, ${m[i].languages.hin}, ${m[i].languages.tam}`;  
           b4.style.padding="4px";
           var b5=document.createElement("p");
            b5.innerHTML=`Region: ${m[i].region}`;  
           b5.style.padding="4px";
           var b6=document.createElement("p");
            b6.innerHTML=`Sub-Region: ${m[i].subregion}`;  
           b6.style.padding="4px";
           var b7=document.createElement("p");
            b7.innerHTML=`Continents: ${m[i].continents}`;  
           b7.style.padding="4px";
            var b8=document.createElement("p");
            b8.innerHTML=`Postal Code: ${m[i].postalCode.format}`; 
             b8.style.padding="4px";
            var b9=document.createElement("p");
            b9.innerHTML=`Area: ${m[i].area}`;  
           b9.style.padding="4px";
           var b10=document.createElement("p");
            b10.innerHTML=`Currency: ${m[i].currencies.INR.name}`;  
           b10.style.padding="4px";
           var b11=document.createElement("p");
            b11.innerHTML=`Timezones: ${m[i].timezones}`;  
           b11.style.padding="4px";
           var b12=document.createElement("p");
            b12.innerHTML=`Start Of Week: ${m[i].startOfWeek}`;  
           b12.style.padding="4px";
           var b13=document.createElement("p");
           b13.innerHTML=`Map: ${m[i].maps.googleMaps}`;
           b13.style.padding="4px";
           temp.appendChild(z);
            temp.appendChild(b1);
            temp.appendChild(b2);
            temp.appendChild(b3);
            temp.appendChild(b4);
            temp.appendChild(b5);
            temp.appendChild(b6);
            temp.appendChild(b7);
            temp.appendChild(b8); 
            temp.appendChild(b9);
            temp.appendChild(b10);
            temp.appendChild(b11);
            temp.appendChild(b12);
            temp.appendChild(b13);
            x.appendChild(temp);
        }
    }
}
xhr.send();
    }
}







