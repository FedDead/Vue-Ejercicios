var app = new Vue({
    el: '#app',
    data: {
      message1: '',
      message2: '',
      message3: '',
      lstperson: [],
      lstnumber: [],
      lstmix: []
    },
    filters: {
        filterLetter(value){
          return value.charAt(0).toUpperCase() + value.slice(1)
        },
        filterCurrency(value){
          return value.charAt(-1) + "$" + value.slice(0);
        },
        filterMix(value){
          return value.split(" ").join("").toUpperCase()
        } 
      },
    methods: {
        addUppercase(){
            this.lstperson.push({
                namePerson: this.message1
            })
        },
        AddCurrency(){
            this.lstnumber.push({
              numberCurrency:this.message2
          })
        },
        addMix(){
          this.lstmix.push({
            personMix: this.message3
          })
        }
    }
})

