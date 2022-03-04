const baseUrl = "https://www.breakingbadapi.com/api";

const getAllCharacters = () => {
	return fetch(baseUrl + "/characters")
		.then(res => res.json())
		.then(characters => characters);
};

export { getAllCharacters };
