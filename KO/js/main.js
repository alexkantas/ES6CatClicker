class Cat {

    constructor(name, image, clicks = 0, nickNames = []) {
        this.name = ko.observable(name);
        this.image = ko.observable(image);
        this.clicks = ko.observable(clicks);
    }

}

cats = [
    new Cat('Woody', "../"+'img/cat.jpg'),
    new Cat('Meow', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'),
    new Cat('Grey', 'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline')
];

cats.push(new Cat('Dooby', 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454'));
cats.push(new Cat('kitsanoo', "../"+'img/kitsanoo-65241.jpg'));
cats.push(new Cat('Roog', 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640'))
cats.push(new Cat('Bigy', 'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480'))


function AppViewModel() {

    this.catList = ko.observableArray(cats);
    this.currentCat = ko.observable(this.catList()[0]);
    this.adminStatus = ko.observable(true);

    this.increaseCatClicks = () => { this.currentCat().clicks(this.currentCat().clicks() + 1) }
    this.putCatToMainArea = cat => { this.currentCat(cat)}
    this.changeAdminStatus = () => { this.adminStatus(!this.adminStatus()) }
}

ko.applyBindings(new AppViewModel());