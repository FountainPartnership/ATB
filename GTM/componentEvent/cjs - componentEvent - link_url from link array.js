function(){
  //Get the link array from cEL function
  var linkArray = {{cjs - componentEvent link clicks - link array from Label}};
  //Set default
  var out = '(not set)';
  //Setting for 2 items
  if(linkArray.length == 2){
    out = linkArray[1];
  //Setting for 3 items
  }else if(linkArray.length == 3){
    out = linkArray[2];
  }else{
    return;
  }
  return out;
}