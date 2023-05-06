/* 
 * Deaktivieren während Entwicklung


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
}

*/


const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement'); // Neuer Button
const showDetailsButton = document.getElementById('show-details');

const counterArray = [];


// Laden des gespeicherten Zählerstands
const storedCounter = localStorage.getItem('counter');
if (storedCounter) {
  counterElement.textContent = storedCounter;
}

incrementButton.addEventListener('click', () => {
  const currentCounter = parseInt(counterElement.textContent, 10);
  const newCounter = currentCounter + 1;
  counterElement.textContent = newCounter;
  
  // Create a new counter object with the current count and date
  const counter = { count: newCounter, date: new Date() };

  // Add the new counter object to the counter array
  counterArray.push(counter);

  // Save the counter array to local storage
  localStorage.setItem('counterArray', JSON.stringify(counterArray));
});


// Neuer Button-Click-Handler
decrementButton.addEventListener('click', () => {
  const currentCounter = parseInt(counterElement.textContent, 10);
  const newCounter = Math.max(currentCounter - 1, 0);
  counterElement.textContent = newCounter;
  
  // Create a new counter object with the current count and date
  const counter = { count: newCounter, date: new Date() };

  // Add the new counter object to the counter array
  counterArray.push(counter);

  // Save the counter array to local storage
  localStorage.setItem('counterArray', JSON.stringify(counterArray));
});

showDetailsButton.addEventListener('click', () => {
  const detailsElement = document.getElementById('details');
  detailsElement.innerHTML = ''; // Clear any existing details
  
  // Create an unordered list element to hold the counter details
  const listElement = document.createElement('ul');
  
  // Add each counter object to the list element
  counterArray.forEach((counter) => {
    const listItemElement = document.createElement('li');
    const date = new Date(counter.date);
    listItemElement.textContent = `Count: ${counter.count}, Date: ${date.toLocaleString()}`;
    listElement.appendChild(listItemElement);
  });
  
  // Add the list element to the details element
  detailsElement.appendChild(listElement);
});

