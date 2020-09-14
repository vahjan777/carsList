export default class Language {
    constructor(){
        if (Language.instance instanceof Language){
            return Language.instance;
        }
        Language.instance = this;
        this.translateControls = document.querySelectorAll('[data-localize]');
        this.translate = null;
    }
    setLang(){
        let locale = localStorage.getItem('lang');

        import(`../Jsons/${locale}.js`).then(locale => {
            this.translate = locale.default;
            this.translateControls.forEach(tag => {
                tag.innerHTML = this.translate[tag.dataset.localize];
            })
        })
    }
}