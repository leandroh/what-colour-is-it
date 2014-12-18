(function() {
  var whatColourIsIt = function() {
    var d = new Date(),
        h = ("0" + d.getHours()).slice(-2),
        m = ("0" + d.getMinutes()).slice(-2),
        s = ("0" + d.getSeconds()).slice(-2);

    var hex = '#' + h + m + s,
        hours = h + ':' + m + ':' + s;
    
    document.body.style.background = hex;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#hex").innerHTML = hex;

    setTimeout(whatColourIsIt, 1000);
  };

  whatColourIsIt();
}());
