// This tells Vercel to run this code in Singapore (Asia)
export const config = {
  regions: ["sin1"], 
};

export default async function handler(req, res) {
  // ------------------------------------------------------
  // PASTE YOUR ASIAN API URL RIGHT HERE:
  const apiUrl = "https://your-asian-api.com/endpoint"; 
  // ------------------------------------------------------

  try {
    // Vercel grabs the data from the Asian API
    const response = await fetch(apiUrl);
    const data = await response.text();
    
    // Vercel sends the data back to your HiddenCloud bot
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Proxy failed: " + error.message);
  }
}
