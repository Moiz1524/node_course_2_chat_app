var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage('Jane', 'Her diary');
      expect(res.from).toBeA('string');
      expect(res.text).toBeA('string');
      expect(res.createdAt).toBeA('number');
  });
});
