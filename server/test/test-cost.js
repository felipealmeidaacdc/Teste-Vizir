const mongoose = require('mongoose');
const moodel = require('../models/cost');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Api Costs', () => {

  

    describe('/GET', () => {
        it('Lista os Costs da api', (done) => {
            chai
                .request(app)
                .get('/costs')
                .end((error, response) => {
                    response.body.should.be.a('array');
                    response.should.have.status(200);
                    done();
                });
        });
 
       

    });

 




});