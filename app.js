function billboard(name, price = 30) {
    var myPrice = 0;
    for (var i = 0; i < name.length; i++) {
        myPrice = myPrice + price;
    }
    return myPrice;
}

console.log(billboard("Jeong-Ho Aristotelis")); // 600
console.log(billboard("Abishai Charalampos")); // 570
console.log(billboard("Idwal Augustin")); // 420
console.log(billboard("Hadufuns John", 20)); // 260
console.log(billboard("Zoroaster Donnchadh")); // 570
console.log(billboard("Claude Miljenko")); // 450
console.log(billboard("Werner Vígi", 15)); // 165
console.log(billboard("Anani Fridumar")); // 420