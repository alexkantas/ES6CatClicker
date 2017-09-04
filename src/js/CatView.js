import Octupus from './Octupus.js'
import Cat from './Cat.js'

export default class CatView {

    constructor() {
        this.sideBar = document.getElementById('catBar');
        this.catDetailArea = document.getElementById('mainCatArea');
        this.adminModeBtn = document.getElementById('adminMode');

        this.adminForm = document.getElementById('adminForm');
        this.catNameInpt = document.getElementById('catNameInpt');
        this.catImageInpt = document.getElementById('catImageInpt');
        this.catClickInpt = document.getElementById('catClickInpt');

        this.cancelBtn = document.getElementById('cancelBtn');
        this.saveBtn = document.getElementById('saveBtn');

        this.mainDiv = document.createElement('div'); //Main div of CatDetailView
        this.spanElement = document.createElement('span'); // span Element for cat clicks #

        this.initAdminListeners();
    }

    initAdminListeners() {

        this.adminModeBtn.addEventListener('click', () => {
            Octupus.changeAdminMode();
        })

        this.cancelBtn.addEventListener('click', () => {
            Octupus.setAdminMode(false);
        })

        this.saveBtn.addEventListener('click', () => {
            Octupus.updateCatInfo(
                new Cat(this.catNameInpt.value,
                    this.catImageInpt.value,
                    this.catClickInpt.value, )
            )
            Octupus.setAdminMode(false);
        })
    }

    showAdminForm(show) {
        if (show) {
            this.adminForm.classList.remove('hidden');
            return;
        }
        this.adminForm.classList.add('hidden');
    }

    loadAdminCatDetails(cat) {
        this.catNameInpt.value = cat.name;
        this.catImageInpt.value = cat.image;
        this.catClickInpt.value = cat.catClicks;
    }

    showCatList(cats) {
        this.sideBar.innerHTML = "";
        cats.forEach(cat => {
            let listItem = document.createElement('li');
            listItem.innerHTML = `${cat.name} <img src="${cat.image}" />`;
            this.sideBar.appendChild(listItem);
            listItem.addEventListener('click', () => {
                Octupus.showCatDetailView(cat);
            })
        })
    }

    showCatDetailView(cat) {
        //Clear MainDiv
        this.mainDiv.innerHTML = "";

        //Main div of CatDetailView
        //Header
        const headerTextStart = document.createTextNode(`${cat.name} has `);
        this.spanElement = document.createElement('span');
        this.spanElement.innerHTML = `${cat.catClicks}`;
        const headerTextEnd = document.createTextNode(` clicks`);
        const headerElement = document.createElement('h3');
        headerElement.appendChild(headerTextStart); // CatName has
        headerElement.appendChild(this.spanElement); // #nuber
        headerElement.appendChild(headerTextEnd); // clicks
        //

        //Image
        const imageElement = document.createElement('img'); //Image on MainDiv
        imageElement.setAttribute('class', 'image');
        imageElement.setAttribute('src', cat.image);
        //

        //Append Header and Image to MainDiV
        this.mainDiv.appendChild(headerElement);
        this.mainDiv.appendChild(imageElement);
        //
        // /mainDiv

        //Click Listener
        imageElement.addEventListener('click', () => {
            Octupus.increaseCatClicks(cat);
        });

        //Append to catDetailArea
        this.catDetailArea.appendChild(this.mainDiv);
    }

    updateCatClicks(catClicks) {
        this.spanElement.innerHTML = catClicks;
    }

}