const mongoose = require('mongoose');
const moodel = require('../models/plan');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Api Planos', () => {

    // testando os planos se foi adcionado
    describe('/POST', () => {
        it('Registra novos planos', (done) => {
            chai
                .request(app)
                .post('/plans')
                .send({
                    name: 'FaleMais30',
                    minutes: '30'
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql('FaleMais30');
                    res.body.should.have.property('minutes').eql('30');
                    done();
                });
        });
        
        
    });
    //listando os planos
    describe('/GET', () => {
        it('Lista os Plans da api', (done) => {
            chai
                .request(app)
                .get('/plans')
                .end((error, response) => {
                    response.body.should.be.a('array');
                    response.should.have.status(200);
                    done();
                });
        });

    
 
    
    });

 




});