AFRAME.registerComponent('state-toggle',{
    init: function() {
        let el = this.el;
        this.toggleState = function() {
            console.log('clicked');
            el.setAttribute('color','#FFA1A1');
        }
        this.el.addEventListener('click',this.toggleState);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleState);

    }
})