calculateAge = (born, countYear) => {
  if (born === countYear) {
    return `You were born this very year!`;
  } else if (born < countYear) {
    return countYear === born + 1 ? `You are 1 year old.` : `You are ${countYear - born} years old.`;
  } else {
    return born === countYear + 1 ? `You will be born in 1 year.` : `You will be born in ${born - countYear} years.`;
  }
}