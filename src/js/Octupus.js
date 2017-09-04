import catModel from './CatModel.js'
import CatView from './CatView.js'

const catView = new CatView();

let currentCat;

const Octupus = {

    setCurrentCat(cat) {
        currentCat = cat;
    },

    getCurrentCat() {
        return currentCat;
    },

    showCatDetailView(cat) {
        currentCat = cat;
        catView.showCatDetailView(cat);
        catView.loadAdminCatDetails(cat);
    },

    increaseCatClicks(cat) {
        cat.catClicks++;
        catView.loadAdminCatDetails(cat);
        catView.updateCatClicks(cat.catClicks);
    },

    updateCatInfo(newcat) {
        catModel.updateCat(currentCat,newcat);
        catView.showCatList(catModel.getCats());
        catView.showCatDetailView(newcat);
        catView.loadAdminCatDetails(newcat);
    },

    changeAdminMode() {
        catModel.changeAdminMode();
        catView.showAdminForm(catModel.adminMode);
    },

    getAdminMode() {
        return catModel.adminMode;
    },

    setAdminMode(mode) {
        catModel.adminMode = mode;
        catView.showAdminForm(catModel.adminMode);
    },

    init() {
        catView.showCatList(catModel.getCats());
    }
};

export default Octupus;