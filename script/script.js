
var num_roman = true;


// validate during input checking if entry is a number and its length - if longer than four digits cut last entered number (limit 3.999)
function validate() {
  var numeral = document.getElementById('number').value;
  
  var size = numeral.length;
  
  if (isNaN(numeral)) {
      numeral.uppercase;
      if (numeral = /[IVXCDM]/) {

      }
  } else {
    num_roman = false;
    if (size > 4) {
      numeral = numeral.slice(0, -1);
      document.getElementById('number').value = numeral;
     // alert("Please enter a number between 1 and 3.999!");
      document.getElementById('num').style.color = "red";
    }
  }  
}
  //document.getElementById('converted').value = numeral;
// convert arabic to roman or vice versa
function convert() {
  var entry = document.getElementById('number').value;
  
  var result = "";
  
  size_of = entry.length;
  

  // if entry is number
  if (num_roman == false) {  
    if (entry < 4000) {   
      switch (size_of) {
        case 1:
          var res1 = ones(entry);
          var sum = res1;
          document.getElementById('converted').value = sum;
          document.getElementById('num').style.color = "black";
          break;
        case 2:
          var res2 = tens(entry);
          var res1 = ones(entry);
          var sum = res2.concat(res1);
          document.getElementById('converted').value = sum;
          document.getElementById('num').style.color = "black";
          break;
        case 3:
          var res3 = hundreds(entry);
          var res2 = tens(entry);
          var res1 = ones(entry);
          var sum = res3.concat(res2, res1);
          document.getElementById('converted').value = sum;
          document.getElementById('num').style.color = "black";
          break;
        case 4:
          var res4 = thousands(entry);
          var res3 = hundreds(entry);
          var res2 = tens(entry);
          var res1 = ones(entry);
          var sum = res4.concat(res3, res2, res1);
          document.getElementById('converted').value = sum;
          document.getElementById('num').style.color = "black";
          break;
      }
      
    } else {
      //alert("Please enter a number between 1 and 3.999!");
      document.getElementById('num').style.color = "red";
      document.getElementById('number').value = "";
      document.getElementById('converted').value = "";
    } 
  } else {
    //entry is roman numeral, convert to arabic
    document.getElementById('converted').value = toArabic(entry.toUpperCase());
  }
}

// convert 0 to 9 to arabic
function ones(entry) {
  var result;
  var lastChar = entry.substr(entry.length - 1); // get the last char in string
  switch (lastChar) {
    case "0":
      result = "";
      break;
    case "1":
      result = "I";
      break;
    case "2":
      result = "II";
      break;
    case "3":
      result = "III";
      break;
    case "4":
      result = "IV";
      break;
    case "5":
      result = "V";
      break;
    case "6":
      result = "VI";
      break;
    case "7":
      result = "VII";
      break;
    case "8":
      result = "VIII";
      break;
    case "9":
      result = "IX";
      break;
  }
  return result;
}

// convert 10 to 90 to arabic
function tens(entry) {
  var secondLastChar = entry.substr(entry.length - 2); // get the last two char in string
  secondLastChar = secondLastChar.substring(0, secondLastChar.length - 1); // trim last char to get the decimal
  switch (secondLastChar) {
    case "0":
      result = "";
      break;
    case "1":
      result = "X";
      break;
    case "2":
      result = "XX";
      break;
    case "3":
      result = "XXX";
      break;
    case "4":
      result = "XL";
      break;
    case "5":
      result = "L";
      break;
    case "6":
      result = "LX";
      break;
    case "7":
      result = "LXX";
      break;
    case "8":
      result = "LXXX";
      break;
    case "9":
      result = "XC";
      break;
  }
  return result;
}

// convert 100 to 900 to arabic
function hundreds(entry) {
  var thirdLastChar = entry.substr(entry.length - 3); // get the last three chars in the string
  thirdLastChar = thirdLastChar.substring(0, thirdLastChar.length - 2); // trim last two chars to get the hundred
  switch (thirdLastChar) {
    case "0":
      result = "";
      break;
    case "1":
      result = "C";
      break;
    case "2":
      result = "CC";
      break;
    case "3":
      result = "CCC";
      break;
    case "4":
      result = "CD";
      break;
    case "5":
      result = "D";
      break;
    case "6":
      result = "DC";
      break;
    case "7":
      result = "DCC";
      break;
    case "8":
      result = "DCCC";
      break;
    case "9":
      result = "CM";
      break;
  }
  return result;
}

// convert 1000 to 3000 to arabic
function thousands(entry) {
  var firstChar = entry.substr(entry.length - 4); // get the last three chars in the string
  firstChar = firstChar.substring(0, firstChar.length - 3); // trim last two chars to get the hundred
  switch (firstChar) {
    case "0":
      result = "";
      break;
    case "1":
      result = "M";
      break;
    case "2":
      result = "MM";
      break;
    case "3":
      result = "MMM";
      break;
  }
  return result;
}

// convert roman numeral to arabic
function toArabic(num) {
    if (checkRomanInput(num)) {
        document.getElementById('rom').style.color = "black";
        var arabic = 0;
        var last_digit = 1000;
        for (var i = 0; i < num.length; i++) {
            var digit = 0;
            if (num.charAt(i) == "I") {
                digit = 1;
            }
            if (num.charAt(i) == "V") {
                digit = 5;
            }
            if (num.charAt(i) == "X") {
                digit = 10;
            }
            if (num.charAt(i) == "L") {
                digit = 50;
            }
            if (num.charAt(i) == "C") {
                digit = 100;
            }
            if (num.charAt(i) == "D") {
                digit = 500;
            }
            if (num.charAt(i) == "M") {
                digit = 1000;
            }
            if (last_digit < digit) {
                arabic -= 2 * last_digit;
            }
            last_digit = digit;
            arabic += last_digit;
        }
        return arabic;
    } else {
        return num;
    }
}

// validate roman numeral
function checkRomanInput(num) {
    for (var k = 0; k < num.length; k++) {
        if (num.charAt(k) != "I" && num.charAt(k) != "V" && num.charAt(k) != "X" && num.charAt(k) != "L" && num.charAt(k) != "C" && num.charAt(k) != "D" && num.charAt(k) != "M") {
          //  alert("Roman Numerals can only be I, V, X, L, C, D or M");
            document.getElementById('rom').style.color = "red";
            document.getElementById('number').value = "";
            document.getElementById('converted').value = "";
            alert("test");
            return false;
        }
    }
    return true;
}