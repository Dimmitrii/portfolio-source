const spacesForBigNumber = (strNumber) => {
  if (strNumber.includes(".")) {
    // console.log(34444);
    strNumber = strNumber.slice(0, -3);
  }
  if (strNumber.length < 4) {
    // console.log(2);
    return strNumber;
  }
  let str = "";
  const spaces = Math.floor(strNumber.length / 3);
  // console.log(spaces)
  const remainder = strNumber.length % 3;
  for (let i = 0; i < spaces; i++) {
    if (i === 0) {
      str += `${strNumber.slice(remainder + i * 3, remainder + 3 + i * 3)}`;
    } else {
      str += ` ${strNumber.slice(remainder + i * 3, remainder + 3 + i * 3)}`;
    }
  }
  if (remainder === 0) {
    return str;
  }
  return `${strNumber.slice(0, remainder)} ${str}`;
};

export default spacesForBigNumber;
