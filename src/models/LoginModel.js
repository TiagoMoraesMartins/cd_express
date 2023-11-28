const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register(){
        this.validate();
        if(this.errors.length > 0 ) return;

        try{
            this.user = await LoginModel.create(this.body);
        }catch(e){
            console.log(e);
        }
    }

    validate(){
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.errors.push('- E-mail inválido');

        if(this.body.password.length < 5 || this.body.password.length > 20){
            this.errors.push('- A senha precisa ter entre 5 e 20 caracteres');
        }

        if(this.body.name.length < 3){
            this.errors.push('- O nome precisa ter ao menos 3 caracteres');
        }
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] != 'string'){
                this.body[key] = '';
            }
        };

        this.body = {
            name: this.body.name,
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;