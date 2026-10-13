// Assignment 2: Emoji Gallery

// Array containing 16 decimal Unicode emoji codes
const emojiCodes = [
128512,
128525,
128514,
128151,
128526,
128640,
127800,
129409,
128049,
128048,
127752,
11088,
127829,
127856,
128150,
127769
]

// Select the empty gallery from HTML
const $gallery = document.getElementById('gallery')

// Function to display the emojis
// By default, count is the total number of emojis


function showEmojis(count = emojiCodes.length) {
  // Clear the gallery before adding new cards
  $gallery.innerHTML = ''
  // Loop through the first count emojis
  for (let i = 0; i < count; i++) {
    // Get the emoji code from the array
    const code = emojiCodes[i]
    // Convert the decimal code into an emoji
    const emoji = String.fromCodePoint(code)
    // Create a new div for the emoji card
    const card = document.createElement('div')
    // Add a CSS class to the card
    card.classList.add('emoji-card')
    // Add the emoji and its decimal code
    card.innerHTML = `
      <span class="emoji">${emoji}</span>
      <p>Code: ${code}</p>
    `
    // Add the card to the gallery
    $gallery.appendChild(card)
  }
}

// Display all emojis when the page loads
showEmojis()
