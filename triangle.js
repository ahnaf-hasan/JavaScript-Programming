//Let's Start
function drawTriangle(size) {
    for (let i = 1; i <= size; i++) {
      let row = '';
      for (let j = 0; j < i; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // Example 
  drawTriangle(7);
  