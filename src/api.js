//Base URL
const base_url = "https://api.rawg.io/api/";
const APP_KEY = "3c1964cf519c4db9b5df3b6ea3e59d46";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${APP_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${APP_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${APP_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${APP_KEY}`;

export const gameScreenshoutURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${APP_KEY}`;

export const searchedGames = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=10&key=${APP_KEY}`;
