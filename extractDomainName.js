
function domainName(url){

  
    let domainStart = "";
    let domainEnd = "";
    for(let i = 0; i < url.length; i ++ ){
      
      if( url[i] == "." &&  url[i-1] != "w" ) {
        domainEnd = i;
        break;
      }
      if(url[i] == "w" && url[i+1] == ".") {
        domainStart = i+2;
      }
      if( url[i] == "/" && url[i+1] == "/"){
        domainStart = i+2;
      }
    }
  console.log("current domainStart:"+ domainStart);
  console.log("current domainEnd:" + domainEnd);
     console.log(url.substring(domainStart, domainEnd));  
     return url.substring(domainStart, domainEnd);
}