

module.exports = function toReadable (number) {



    const digit2word100 = (digit) => {
        switch (digit) {
      case '1': {return 'one';};
      case '2': {return 'two';};
      case '3': {return 'three';};
      case '4': {return 'four';};
      case '5': {return 'five';};
      case '6': {return 'six';};
      case '7': {return 'seven';};
      case '8': {return 'eight';};
      case '9': {return 'nine';};
      case '0': {return "";};
    };
    };
    
    const digit2word10 = (digit) => {
        switch (digit) {
      case '1': {return 'one';};
      case '2': {return 'twenty';};
      case '3': {return 'thirty';};
      case '4': {return 'forty';};
      case '5': {return 'fifty';};
      case '6': {return 'sixty';};
      case '7': {return 'seventy';};
      case '8': {return 'eighty';};
      case '9': {return 'ninety';};
      case '0': {return "";};
    };
    };
    
    const digit2word11 = (digit) => {
        switch (digit) {
      case '11': {return 'eleven';};
      case '12': {return 'twelve';};
      case '13': {return 'thirteen';};
      case '14': {return 'fourteen';};
      case '15': {return 'fifteen';};
      case '16': {return 'sixteen';};
      case '17': {return 'seventeen';};
      case '18': {return 'eighteen';};
      case '19': {return 'nineteen';};
      case '10': {return 'ten';};
    };
    };



  
  let digitAmount = String(number).length;
  number = String(number);
  let result = '';

  
  switch (digitAmount) {
  case 1: {
      if (number[0] == 0) return 'zero'; else {
      result = digit2word100(number[0]);
      break;
      }
  };
  case 2: {
      if (number[0] == 1) {
      result =  digit2word11(number[0] + number[1]);
      break;;
      } else {
      result = digit2word10(number[0]) + ' ' + digit2word100(number[1]);
      break;
      }
  };
  case 3: {
      if (number[1] == 1) {
          result = digit2word100(number[0]) + ' hundred ' +  digit2word11(number[1] + number[2]);
          break;
      } else if (number[1] == 0) {
          result = digit2word100(number[0]) + ' hundred ' +  digit2word100(number[2]);
          break;
      }      
      else {
      result = digit2word100(number[0]) + ' hundred ' +  digit2word10(number[1]) + ' ' + digit2word100(number[2]);
      break;
      }
  };
  };  


  return result.trim();
  
};







