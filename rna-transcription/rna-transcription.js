export const toRna = (dnaStrand) => {
  const TRANSCRIPTIONS = {
    G: 'C', C: 'G', T: 'A', A: 'U'
  }  

  return Array.from(dnaStrand).map(letter => TRANSCRIPTIONS[letter]).join('');  
};
