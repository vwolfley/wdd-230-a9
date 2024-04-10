url =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
    //   console.log(data);
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
  
}
apiFetch();

function displayResults(data) {
  const heroes = data.members;
  console.log(heroes);
// 
  const power = data.members.find(
    (member) => member.name === "Eternal Flame"
  ).powers[1];
  // console.log(power);
}