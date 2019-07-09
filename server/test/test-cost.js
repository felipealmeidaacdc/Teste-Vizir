const mongoose = require('mongoose');
const moodel = require('../models/cost');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Api Costs', () => {

    //testando valores incorretos
    describe('/POST', () => {
        it('Registra novos Custos', (done) => {
            chai
                .request(app)
                .post('/costs')
                .send({
                    source_code: '011',
                    target_code: '017',
                    value: '1.70'
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('source_code').eql('90');
                    res.body.should.have.property('target_code').eql('30');
                    res.body.should.have.property('value').eql('1.73');
                    done();
                });
        });
          
    });
  

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