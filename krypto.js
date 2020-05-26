function encrypt(string) {
  var keys = 'ghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ!@#$%*()-_+=';
  var size = 256;
  var result = '';
  var bytes = [];
  for (var i = 0; i < string.length; ++i) {
    var code = string.charCodeAt(i);
    bytes = bytes.concat([code]);
  }
  for (var i = 0; i < bytes.length; i++) {
    var byte = bytes[i];
    var value = byte.toString(2);
    var number = Number(value);
    var hexString = number.toString(16);
    while (hexString.length < size) {
      hexString = keys[Math.floor(Math.random() * keys.length)] + hexString;
    }
    result = hexString + result;
  }
  return result;
}

function decrypt(string) {
  var keys = '0123456789abcdef';
  var size = 256;
  var result = '';
  for (var i = 0; i < string.length / size; i++) {
    var start = size * i;
    var end = size * i + size;
    var value = string.substring(start, end);
    var charArray = value.split('').join('');
    var hexString = '';
    for (var char of charArray) {
      if (keys.includes('' + char)) {
        hexString += char;
      }
    }
    var bin = '' + Number.parseInt(hexString, 16);
    var int = Number.parseInt(bin, 2);
    result += '' + String.fromCharCode(int);
  }
  return result
    .split('')
    .reverse()
    .join('');
}
