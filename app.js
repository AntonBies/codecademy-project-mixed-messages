const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
const randomScore = () => Math.floor(Math.random() * 60) + 70;

const teams = ['Boston Celtics', 'Brooklyn Nets', 'New York Knicks', 'Philadelphia 76ers', 'Toronto Raptors', 'Chicago Bulls', 'Cleveland Caveliers', 'Detroit Pistons', 'Indiana Pacers', 'Milwaukee Bucks', 'Atlanta Hawks', 'Charlotte Hornets', 'Miami Heat', 'Orlando Magic', 'Washington Wizards', 'Denver Nuggets', 'Minnesota Timerwolves', 'Oklahoma City Thunder', 'Portland Trail Blazers', 'Utah Jazz', 'Golden State Warriors', 'LA Clippers', 'Los Angeles Lakers', 'Phoenix Suns', 'Sacramento Kings', 'Dallas Mavericks', 'Houston Rockets', 'Memphis Grizzlies', 'New Orleans Pelicans', 'San Antonio Spurs'];

const awayTeam = teams[randomIndex(teams)];
let homeTeam = teams[randomIndex(teams)];
while (homeTeam === awayTeam) {
  homeTeam = teams[randomIndex(teams)];
}

const awayScore = randomScore();
let homeScore = randomScore() + 5;

while (homeScore === awayScore) {
  homeScore = randomScore() + 5;
}

console.log(`NBA Prediction:\n${awayTeam} @ ${homeTeam}\nFinal score: ${awayScore} - ${homeScore}`);