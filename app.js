new Vue({
    el: '#app',
    data: {
        names: ['jamla', 'kamal', 'rahim', 'karim'],
        items: [
            "Learn programing language",
            "Data structure and algorithm",
            "Practice coding regularly"
        ],
        addItem: '',

    },
    methods:{
        itemSubmit: function(event){
            event.preventDefault();
            this.items.push(this.addItem);
            this.addItem = '';
        },
        removeItem: function(index){
            this.items.splice(index, 1);
        }
    }

})