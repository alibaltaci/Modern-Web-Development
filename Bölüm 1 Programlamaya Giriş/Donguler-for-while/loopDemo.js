function sayiUret(ustlimit = 49){
    return Math.ceil(Math.random() * ustlimit)
}

for(var i = 1; i<=8; i++){
    console.log("Kolon: " + i)
    for(var j = 1; j<=6; j++){
        console.log(sayiUret())
    }
}