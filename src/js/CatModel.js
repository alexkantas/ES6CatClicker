import Cat from './Cat.js'

class CatModel {

    constructor() {
        this.cats = [];
        this.adminMode = false;
    }

    changeAdminMode() {
        this.adminMode = !this.adminMode;
    }

    updateCat(oldcat,newcat) {
        this.cats.forEach((modelcat,index) => {
            console.log(modelcat.name);
            if (modelcat === oldcat) {
                console.log('We found it');
                this.cats[index] = newcat;
                return;
            }
        });
        
    }

    addCat(cat) {
        cats.push(cat)
    }

    getCats() {
        console.log(this.cats);
        return this.cats;
    }
}

const catModel = new CatModel();

catModel.cats = [
    new Cat('Woody', 'img/cat.jpg'),
    new Cat('Meow', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'),
    new Cat('Grey', 'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline')
];

catModel.cats.push(new Cat('Dooby', 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454'));
catModel.cats.push(new Cat('kitsanoo', 'img/kitsanoo-65241.jpg'));
catModel.cats.push(new Cat('Roog', 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640'))
catModel.cats.push(new Cat('Bigy', 'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480'))



export default catModel;