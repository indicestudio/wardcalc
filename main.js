fetch('https://na.api.pvp.net/api/lol/las/v1.3/stats/by-summoner/rozencr4nts/summary?api_key=RGAPI-51f23220-8bb5-4d88-951e-d9eea135c076')
  .then(response => response.json())
  .then(data => console.log(data));