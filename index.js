amount = 0;
document.querySelector(".button-1").addEventListener("click", function(event) {
    event.preventDefault();
    var num = Number(document.querySelector(".input-1").value);
    amount = amount + num;
    document.querySelector(".wallet h3").innerHTML = "My Wallet: ₹" + amount;
});

document.querySelector(".button-2").addEventListener("click", function(event) {
    event.preventDefault();
    var num = Number(document.querySelector(".input-2").value);
    amount = amount - num;
    document.querySelector(".wallet h3").innerHTML = "My Wallet: ₹" + amount;
});
var bidAmount = 10;
var currentBid = 10;

document.querySelector(".raiseBid").addEventListener("click", function() {
    currentBid = currentBid * 2;
    document.querySelector(".bid-conatiner h2").innerHTML = "Current Bid : ₹" + currentBid;
});

document.querySelector(".match").addEventListener("click", function() {
    bidAmount = bidAmount + currentBid;
    document.querySelector(".bid-conatiner h2").innerHTML = "Current Bid : ₹" + currentBid;
    document.querySelector(".bid-conatiner h3").innerHTML = "Amount: ₹" + bidAmount;
});

document.querySelector(".raise").addEventListener("click", function() {
    currentBid = currentBid * 2;
    bidAmount = bidAmount + currentBid;
    document.querySelector(".bid-conatiner h2").innerHTML = "Current Bid : ₹" + currentBid;
    document.querySelector(".bid-conatiner h3").innerHTML = "Amount: ₹" + bidAmount;
});

document.querySelector(".pack").addEventListener("click", function() {
    amount = amount - bidAmount;
    document.querySelector(".wallet h3").innerHTML = "My Wallet: ₹" + amount;
    currentBid = 10;
    bidAmount = 10;
    document.querySelector(".bid-conatiner h2").innerHTML = "Current Bid : ₹" + currentBid;
    document.querySelector(".bid-conatiner h3").innerHTML = "Amount: ₹" + bidAmount;
});


document.querySelector(".won").addEventListener("click", function() {
    currentBid = 10;
    bidAmount = 10;
    document.querySelector(".bid-conatiner h2").innerHTML = "Current Bid : ₹" + currentBid;
    document.querySelector(".bid-conatiner h3").innerHTML = "Amount: ₹" + bidAmount;
});