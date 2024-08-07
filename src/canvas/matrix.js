import React, { useRef, useEffect } from 'react';

const Matrix = () => {
  const canvas = useRef();

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext('2d')
      console.log(ctx);
      // do something here with the canvas
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.current.width = canvasWidth;
      canvas.current.height = canvasHeight;
  
      // Create an array of characters
      const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  
      // Create an array of columns
      const columns = Math.floor(canvasWidth / 1);
  
      // Initialize the y positions of the columns
      const yPositions = [];
  
      for (let i = 0; i < columns; i++) {
        yPositions[i] = Math.random() * canvasHeight;
      }
  
      // Update the matrix animation
      function updateMatrix() {
        // Set the background color
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  
      // Set the text color and font
      ctx.fillStyle = "green";
      ctx.font = "12px timesnewroman";
  
      // Loop through each column
      for (let i = 0; i < columns; i++) {
        // Select a random character from the array
      const character = characters[Math.floor(Math.random() * characters.length)];
    
      // Set the y position of the current column
      const y = yPositions[i];
    
      // Draw the character at the current position
      ctx.fillText(character, i * 20, y);
    
      // Move the column down by 20 units
      yPositions[i] += 20;
    
      // Reset the position if it reaches the bottom of the canvas
      if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
        yPositions[i] = 0;
      }
    }
  }
  
  // Render the matrix animation
  function renderMatrix() {
    requestAnimationFrame(renderMatrix);
    updateMatrix();
  }
  
  renderMatrix();
  }
  }, []);

  return (
    <canvas id="matrixCanvas" ref={canvas}></canvas>
  )
}

export default Matrix;