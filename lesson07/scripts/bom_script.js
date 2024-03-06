const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

input.value = "";
input.focus();

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌'; // Fixed typo here
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Fixed typo here
        input.focus();
    });
    console.log(item);
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')); // Fixed key here
}

function deleteChapter(chapter) {
    let chaptersArray = getChapterList() || []; // Initialize chaptersArray here
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
