var LCD = require('./index.js');

var lcd = new LCD('/dev/i2c-0', 0x27);

lcd.createChar( 0,[ 0x1B,0x15,0x0E,0x1B,0x15,0x1B,0x15,0x0E] ).createChar( 1,[ 0x0C,0x12,0x12,0x0C,0x00,0x00,0x00,0x00] );

lcd.print('Raspberry Pi '+String.fromCharCode(0)).setCursor(0,1).cursorUnder();

var os = require('os')

//var interfaces = os.networkInterfaces();
//console.log(interfaces);
//lcd.print(interfaces.wan0[0].address);

setTimeout(function() {
d=new Date;
var s=d.toString();
lcd.setCursor(0,0).print(s);
lcd.setCursor(0,1).print(s.substring(16));
console.log(s);

}, 4000 );

setTimeout(function() {
lcd.clear().setCursor(0,1).print('ironman').cursorFull();
lcd.setCursor(0,0).print('lego '+String.fromCharCode(0)+ '22'+String.fromCharCode(1));
},6000);



