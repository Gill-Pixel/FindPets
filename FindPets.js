const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Agatha",
        breed: "Terrier, American Pit",
        age: 7
    },
    {
        dogName: "Aunt Millie",
        breed: "Terrier, Staffordshire",
        age: 6 
    },
    {
        dogName: "AZURRA",
        breed: "Terrier, Pit Bull/Akita",
        age: 4
    },
    {
        dogName: "Bear",
        breed: "Australian Kelpie/Mix",
        age: 3 
    },    
    {
        dogName: "BEAU",
        breed: "Great Pyrenees/Mix",
        age: 1
    },
    {
        dogName: "Bella",
        breed: "Terrier, American Pit Bull/Boxer",
        age: 10
    },
    {
        dogName: "Benji",
        breed: "Retriever, Labrador/Chow Chow",
        age: 6 
    },    
    {
        dogName: "Bentley",
        breed: "Rottweiler/Shepherd",
        age: 1
    },
    {
        dogName: "BERNADETTE",
        breed: "Dachshund, Standard Smooth Haired/Mix",
        age: 15
    },
    {
        dogName: "BETSY",
        breed: "Vizsla, Smooth Haired/Mix",
        age: 1
    },
    
    
    
];

document.addEventListener('DOMContentLoaded', () => {
    const findDogsButton = document.getElementById('findDogsButton');
    findDogsButton.addEventListener('click', findDogsByAge);
});

function findDogsByAge() {
    const minAge = parseInt(document.getElementById('minAge').value);
    const selectedDogs = [];

    allDogs.forEach((dog) => {
        if (dog.age > minAge) {
            selectedDogs.push(dog);
        }
    });

    displayDogs(selectedDogs);
}

function displayDogs(dogList) {
    const dogListContainer = document.getElementById('dogList');
    dogListContainer.innerHTML = ''; // Clear previous results

    if (dogList.length === 0) {
        dogListContainer.textContent = 'No dogs found matching the criteria.';
    } else {
        const ul = document.createElement('ul');
        dogList.forEach((dog) => {
            const li = document.createElement('li');
            li.textContent = `${dog.dogName} - ${dog.breed} - ${dog.age} years old`;
            ul.appendChild(li);
        });
        dogListContainer.appendChild(ul);
    }
}