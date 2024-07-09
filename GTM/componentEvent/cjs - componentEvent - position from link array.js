function(){
  //Get the link array from cEL function
  var linkArray = {{cjs - componentEvent link clicks - link array from Label}};
  //Set default
  var out = '(not set)';
  //Setting for 3 items
  if(linkArray.length == 3 && /\d/.test(linkArray[0])){
    out = linkArray[0];
  }else{
    return;
  }

  return out;
}