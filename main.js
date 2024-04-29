const kmuser = Number(prompt("Quanti chilometri vuole percorrere?"));

const yearuser = Number(prompt("Quanti anni hai?"));

const  kmprice = 0.21;

const pricekmuser = kmprice * kmuser ;
let price = pricekmuser;
const underage = 18;
const over65 = 65;

const saleunderage = 20;
const saleover65 = 40;

if (underage>yearuser) {
   price= price - (price/100*saleunderage)
   
}else if(over65<yearuser) {
    price=price- (price/100*saleover65)
}





let  currentText;
currentText = `
km da percorrere: ${kmuser}  
anni dell'utente: ${yearuser} 
prezzo al km ${kmprice}€     
prezzo dei km da percorrere ${pricekmuser}€
prezzo finale ${price}€
`;



console.log(currentText);