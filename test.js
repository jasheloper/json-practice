let motherInfo = "The mother cats are called ";

let kittenInfo;

const requestURL = "https://jasheloper.github.io/json-practice/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  const catData = JSON.parse(catString);

    for (let i = 0; i < catData.length; i++) {
        // store the names of the three mother cats, separated by commas, in the motherInfo variable
        const motherData = catData[i];
        const motherName = motherData["name"];
        motherInfo += `${motherName}, `;

        // store the total number of kittens, 
        // and how many are male and female, 
        // in the kittenInfo variable.

    }

    console.log(motherInfo);
}