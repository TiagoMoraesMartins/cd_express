  const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

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

    async logar(){
        try{
            this.validate();
            if(this.errors.length > 0) return;
            this.user = await LoginModel.findOne({email: this.body.email});

            if(!this.user){
                this.errors.push('Usuário não existe na base de dados');
                return;
            }

            if(!bcryptjs.compareSync(this.body.password, this.user.password)){
                this.errors.push('Senha inválida');
                this.user = null;
                return;
            }
        }catch(e){
            console.log(e);
        }
    }

    async register(){
        this.validate();
        if(this.errors.length > 0 ) return;

        try{
            await this.userExists();
            if(this.errors.length > 0) return;

            const salt = bcryptjs.genSaltSync();
            this.body.password = bcryptjs.hashSync(this.body.password, salt);
            this.user = await LoginModel.create(this.body);
        }catch(e){
            console.log(e);
        }
    }

    validate(){
        this.cleanUp();
        if(this.body.email){
            if(!validator.isEmail(this.body.email)){
                this.errors.push('- E-mail inválido');
            }
        }

        if(this.body.password){
            if(this.body.password.length < 5 || this.body.password.length > 20){
                this.errors.push('- A senha precisa ter entre 5 e 20 caracteres');
            }
        }

        if(this.body.name){
            if(this.body.name.length < 3){
                this.errors.push('- O nome precisa ter ao menos 3 caracteres');
            }
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

    async userExists(){
        this.user = await LoginModel.findOne({email: this.body.email});
        if(this.user) this.errors.push('Esse e-mail já está sendo utilizado.')
    }
}

module.exports = Login;
