function(){
  //Get the component event label string
  var cel = {{cjs - cleaned dlv componentEventLabel}};
  //Check cEL contains a URL
  if (cel.includes(';;; /') && /\/[a-zA-Z0-9\-_\/]+/.test(cel)) {
    // Split the string by ';;;'
    var resultArray = cel.split(';;;');
    // Trim any extra whitespace from each element
    for (var i = 0; i < resultArray.length; i++) {
      resultArray[i] = resultArray[i].trim();
    }
    return resultArray;
  }else{
    //Fallback for cELs which do not match the URL check
    return '(not set)';
  }
}