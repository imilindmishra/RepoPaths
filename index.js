// Function to fetch suggestions from the server
function fetchSuggestions(repoName) {
    fetch(`/suggestions?repoName=${repoName}`)
      .then(response => response.json())
      .then(data => {
        // Update the HTML with the suggestions
        const suggestionsList = document.getElementById('suggestions-list');
        suggestionsList.innerHTML = '';
  
        data.suggestions.forEach(suggestion => {
          const listItem = document.createElement('li');
          listItem.textContent = suggestion;
          suggestionsList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
  // Listen for user input (typing) in the search input field
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', event => {
    const repoName = event.target.value;
    fetchSuggestions(repoName);
});
  