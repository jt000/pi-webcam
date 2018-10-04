const expect = require('chai').expect;

describe('A suite', function() {
    it('contains spec with an expectation', function() {
        let result = true;
        expect(result)
            .to.be.a('boolean', 'expected a boolean value')
            .and.to.equal(true, 'expected true');
    });
});
