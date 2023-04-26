if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
}

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement'); // Neuer Button

// Laden des gespeicherten Zählerstands
const storedCounter = localStorage.getItem('counter');
if (storedCounter) {
  counterElement.textContent = storedCounter;
}

incrementButton.addEventListener('click', () => {
  const currentCounter = parseInt(counterElement.textContent, 10);
  const newCounter = currentCounter + 1;
  counterElement.textContent = newCounter;

  // Speichern des neuen Zählerstands
  localStorage.setItem('counter', newCounter);
});

// Neuer Button-Click-Handler
decrementButton.addEventListener('click', () => {
  const currentCounter = parseInt(counterElement.textContent, 10);
  const newCounter = Math.max(currentCounter - 1, 0);
  counterElement.textContent = newCounter;

  // Speichern des neuen Zählerstands
  localStorage.setItem('counter', newCounter);
});
