const Perguntas = require("../models/perguntas")
const Usuario = require("../models/usuario")

class InputService {

    inputUser(){
        event.preventDefault()
        this.user = $('#user-input')
        this.latitude = $('#latitude').text().replace(/ /g,'')
        this.longitude = $('#longitude').text().replace(/ /g,'')
        console.log(this.latitude, this.longitude)
        this.date = $('#date-input').val().replace(/-/g, "/")
        let data = this.date
        return new Usuario(this.user.val(), data, this.latitude, this.longitude)
    }
    
    inputPerguntas(){
        event.preventDefault()
        this.perguntas = new Perguntas()
        $('input[name="perguntas[]"]').map((index, pergunta) => {
            console.log(typeof pergunta)
            this.perguntas.enunciados.push($(pergunta).val())
        })
        console.log(this.perguntas)
        return this.perguntas
    }
    
    inputRespostas(){
        
        $()
    }

} module.exports = InputService

