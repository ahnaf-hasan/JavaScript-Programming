//Let's Start
function printStars(n) {
    let stars = '';
    for (let i = 0; i < n; i++) {
      stars += '* ';
    }
    console.log(stars);
  }
  
  //Set 

  const rows = 3;
  const cols = 2;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      printStars(3);
    }
    console.log('');
  }
  