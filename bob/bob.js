export const hey = (message) => {
  let yelling = /[A-Za-z]/.test(message) && message.toUpperCase() === message;
  if (yelling && /\?$/.test(message)) return 'Calm down, I know what I\'m doing!';
  else if (yelling) return 'Whoa, chill out!'; 
  else if (/\?\s*$/.test(message)) return 'Sure.';
  else if (/^\W*$/.test(message)) return 'Fine. Be that way!';
  else return 'Whatever.';
};
