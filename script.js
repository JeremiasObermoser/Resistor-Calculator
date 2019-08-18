//color values
var values = new Array(3);
//update function, being handed the band index and band value
function update(bandex,value) {
    //setting array
    values[bandex] = value;
    console.log(values);
    //adding first two bands
    var result = values[0]+values[1];
    console.log(result);
    //result = parseInt(result);
    //console.log(result);
    //multiply with third ring
    result *= values[2];
    console.log(result);
    //check if true
    if (result == result) {
        console.log(result);
        if (result>=1000000) {
            result/=1000000;
            console.log(result);
            result+=" M"
            console.log(result);
        }else if (result>=1000) {
            result/=1000;
            console.log(result);
            result+=" k";
            console.log(result);
        }
        result+="Ω";
        console.log(result);
        document.getElementById('head').innerHTML = result;
    }

}
