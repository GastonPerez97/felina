const baseUrl = "https://www.breakingbadapi.com/api";

const fetchData = endpoint => {
	return fetch(baseUrl + endpoint)
		.then(res => res.json())
		.then(data => data);
};

const getAllCharacters = () => fetchData("/characters?category=Breaking+Bad");
const getAllEpisodes = () => fetchData("/episodes?series=Breaking+Bad");
const getAllQuotes = () => fetchData("/quotes?series=Breaking+Bad");

export { getAllCharacters, getAllEpisodes, getAllQuotes };
