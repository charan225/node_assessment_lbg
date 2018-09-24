const chai = require('chai');
const expect = require('chai').expect;
var createError = require('http-errors');

chai.use(require('chai-http'));

const app = require('../app.js'); 

describe('API endpoint /api/', function() {
    this.timeout(10000); // How long to wait for a response (ms)

    before(function() {
    });

    after(function() {
    });
    var num1 = 25, num2 = 5;
    var product = 125;
    it('should multiply the input numbrs', function() {
        return chai.request(app)
        .get(`/api/product/${num1}/${num2}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            
           
                   });
    });

      it('should return first non-repeating char from input string', function() {
        return chai.request(app)
        .post('/api/string')
        .send({
            name : 'abbcadbd'
        })
        .then(function(err,res,body) {
            expect(res).to.have.status(200);
            
        })
        
    });
        it('should upload file into uploads folder', function() {
        return chai.request(app)
        .post('/api/upload')
        .send({
            filePath : './greet.txt'
        })
        .then(function(err,res,body) {
            expect(res).to.have.status(200);
            
        })
        
    });

});