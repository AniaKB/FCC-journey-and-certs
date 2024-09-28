const headings = document.querySelectorAll('h3');

headings.forEach(heading => {
  heading.addEventListener('click', function() {
    const contentId = heading.id;
    const content = document.getElementById(contentId);

    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  })
})

let JSAlgorithms = [
pyramindGenerator = {
  count: 118,
  finished: 118
},
gradebookApp = {
  count: 4,
  finished: 4
},
rpg = {
  count: 173,
  finished: 173
},
backgroundColorChanger = {
  count: 8,
  finished: 8
},
calorieCounter = {
  count: 96,
  finished: 75
},
rps = {
  count: 6,
  finished: 6
},
musicplayer = {
  count: 99,
  finished: 27
},
palindromeChecker = {
  count: 1,
  finished: 0
},
dateFormatter = {
  count: 29,
  finished: 29
},
footballTeamCards = {
  count: 47,
  finished: 47
},
toDoApp = {
  count: 65,
  finished: 0
},
binaryConverter = {
  count: 109,
  finished: 0
},
romanNumeralConverter = {
  count: 1,
  finished: 0
},
spamFilter = {
  count: 35,
  finished: 35
},
numberSorter = {
  count: 45,
  finished: 28
}
];