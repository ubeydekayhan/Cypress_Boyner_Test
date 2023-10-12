import { fa, faker } from '@faker-js/faker';
class Email {

 
    email(){

      return  faker.internet.email();
    }
}
module.exports = new Email();

