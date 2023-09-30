const express = require('express');
const axios = require('axios');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Start your server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the GitHub Viewer.');
});


app.get('/suggestions', async (req, res) => {
  const { repoName } = req.query;

  try {
    // Make a request to the GitHub API to search for repositories with a similar name
    const response = await axios.get(`https://api.github.com/search/repositories?q=${repoName}`);
    
    // Extract relevant data from the GitHub API response (e.g., repository names)
    const suggestions = response.data.items.map(item => item.full_name);

    res.json({ suggestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching suggestions.' });
  }
});








