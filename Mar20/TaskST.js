// Enter electricity unit and calculate amount to pay (supported)
kilowatt = 385
bill = 0
// Frome 1-160 kilowatt.
if(kilowatt<=160){
  bill  = kilowatt*0.033
}
// From 161-300 kilowatt.
else if(kilowatt <=300){
  bill = 160*0.033 + (kilowatt-160)*0.072
}
// From 301-500 kilowatt.
else if(kilowatt<=500){
  bill = 160*0.033 + 140*0.072 + (kilowatt-300)*0.086
}
// From 501-600 kilowatt.
else if(kilowatt<=600){
  bill = 160*0.033 + 140*0.072 + 200*0.086 +(kilowatt-500)*0.114
}
// From 601-750 kilowatt.
else if(kilowatt<=750){
  bill = 160*0.033 + 140*0.072 + 200*0.086 + 100*0.114 + (kilowatt-600)*0.158
}
// From 751-1000 kilowatt.
else if(kilowatt<=1000){
  bill = 160*0.033 + 140*0.072 + 200*0.086 + 100*0.114 + 150*0.158 +(kilowatt-750)*0.188
}
// From 1000-999999 kilowatt.
else if(kilowatt<=999999){
  bill = 160*0.033 + 140*0.072 + 200*0.086 + 100*0.114 + 150*0.158 + 250*0.188 +(kilowatt-1000)*0.256
}

console.log(bill)