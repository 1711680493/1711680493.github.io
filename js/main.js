if(window!=top){top.location.href=location.href}textRain(document.getElementById("bg"),"Shendi");var websites=document.getElementById("websites");let urls;if(window.XMLHttpRequest){urls=new XMLHttpRequest()}else{urls=new ActiveXObject("Microsoft.XMLHTTP")}urls.onreadystatechange=function(){if(urls.readyState==4){var jsonArr=eval(urls.responseText);for(let i=0;i<jsonArr.length;i++){websites.innerHTML+="<li><a href='"+jsonArr[i].url+"'>"+jsonArr[i].name+"</a></li>"}}};urls.open("GET","/url.json",true);urls.send();