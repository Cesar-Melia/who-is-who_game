const questionsType = [
    {
        title: "Gender",
        key: "gender",
        questions: ["Man", "Woman"],
    },
    {
        title: "Hair Color",
        key: "hairColor",
        questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
    },
    {
        title: "Moustache",
        key: "moustache",
        questions: ["Yes", "No"],
    },
    {
        title: "Glasses",
        key: "glasses",
        questions: ["Yes", "No"],
    },
    {
        title: "Hat or Cap",
        key: "hatOrCap",
        questions: ["Yes", "No"],
    },
    {
        title: "Clothes color",
        key: "clothesColor",
        questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
    },
    {
        title: "Skin color",
        key: "skinColor",
        questions: ["Light", "Dark"],
    },
    {
        title: "Long Hair",
        key: "longHair",
        questions: ["Yes", "No"],
    },
];

const persons = [
    {
        img: "images/001-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/002-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/003-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Green",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/004-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "Yes",
        clothesColor: "Red",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/005-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/006-man.svg",
        gender: "Man",
        hairColor: "Brown",
        moustache: "Yes",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Green",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/007-man.svg",
        gender: "Man",
        hairColor: "Red",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/008-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/009-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/010-woman.svg",
        gender: "Woman",
        hairColor: "Brown",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Pink",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/011-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/012-woman.svg",
        gender: "Woman",
        hairColor: "Red",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/013-woman.svg",
        gender: "Woman",
        hairColor: "White",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Pink",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/014-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/015-woman.svg",
        gender: "Woman",
        hairColor: "Brown",
        moustache: "No",
        glasses: "Yes",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/016-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "Yes",
        clothesColor: "Pink",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/017-woman.svg",
        gender: "Woman",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/018-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/019-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/020-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/021-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "Yes",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/022-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "Yes",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/023-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/024-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/025-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/026-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/027-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/028-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Pink",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/029-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/030-woman.svg",
        gender: "Woman",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Orange",
        skinColor: "Dark",
        longHair: "No",
    },
    {
        img: "images/031-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Green",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/032-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "Yes",
        hatOrCap: "No",
        clothesColor: "Pink",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/033-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/034-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "Yes",
        clothesColor: "Pink",
        skinColor: "Dark",
        longHair: "Yes",
    },
    {
        img: "images/035-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/036-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/037-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "Yes",
        clothesColor: "Red",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/038-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/039-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "Yes",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Green",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/040-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/041-man.svg",
        gender: "Man",
        hairColor: "Blonde",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/042-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/043-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Black",
        skinColor: "Light",
        longHair: "Yes",
    },
    {
        img: "images/044-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Pink",
        skinColor: "Light",
        longHair: "No",
    },
    {
        img: "images/045-woman.svg",
        gender: "Woman",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "White",
        skinColor: "Light",
        longHair: "No",
    },
];

const tablero$$ = document.body.querySelector("[data-function='boardGame']");
const questions$$ = document.body.querySelector("[data-function='questions']");
const clues$$ = document.body.querySelector("[data-function='clueCount']");
let clues = 0;
let randomNum = parseInt(Math.random() * (45 - 1) + 1);
let persChosen$$ = persons[randomNum - 1];
let personsToDisable = [];

const userOption = () => {
    if (event.target.id === persChosen$$.id) {
        alert(`??Congratulations, you win!\nYou have used ${clues} clues.`);
        resetBoard();
    } else {
        alert("You lose :(");
        resetBoard();
    }
};

for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    Object.defineProperty(person, "id", { value: `p${i + 1}` });
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<img id="p${i + 1}" src="${person.img}"></img>`;
    div$$.addEventListener("click", userOption);
    tablero$$.appendChild(div$$);
}

const disablePersons = () => {
    for (const person of personsToDisable) {
        const divToDisable = document.body.querySelector(`#${person.id}`);
        divToDisable.setAttribute("class", "b-disabled");
    }
    event.target.setAttribute("class", "b-disabled");
    personsToDisable = [];
};

const updateClues = () => {
    clues++;
    clues$$.textContent = clues;
};

const checkQuestion = (event) => {
    const questionKey = event.target.parentElement.getAttribute("data-function__key");
    const questionValue = event.target.textContent;
    updateClues();
    for (const person of persons) {
        if (persChosen$$[questionKey] === questionValue) {
            if (person[questionKey] !== persChosen$$[questionKey]) {
                personsToDisable.push(person);
            }
        } else {
            if (person[questionKey] === questionValue) {
                personsToDisable.push(person);
            }
        }
    }
    disablePersons();
};

for (const questionType of questionsType) {
    const div$$ = document.createElement("div");
    div$$.setAttribute("data-function__key", `${questionType.key}`);
    div$$.innerHTML = `<h2>${questionType.title}</h2>`;

    for (const question of questionType.questions) {
        const button$$ = document.createElement("button");
        button$$.textContent = `${question}`;
        button$$.addEventListener("click", checkQuestion);
        div$$.appendChild(button$$);
    }

    questions$$.appendChild(div$$);
}

const resetBoard = () => {
    const resetClass$$ = document.body.querySelectorAll("[class='b-disabled']");
    for (element of resetClass$$) {
        element.removeAttribute("class");
    }
    clues = 0;
    clues$$.textContent = clues;
    randomNum = parseInt(Math.random() * (45 - 1) + 1);
    persChosen$$ = persons[randomNum - 1];
};
