const { expect } = require('chai');
const chai = require('chai');

// compass
//
//     North
// West  <->  East
//     South


// A test list :
// - starting (1, 1) facing east, got forward,          ending in (2,1) facing east
// - starting (1, 1) facing east, got forward-forward,  ending in (3,1) facing east
// - starting (1, 1) facing east, got backward,         ending in (0,1) facing east
// - starting (2, 2) facing east, got forward,          ending in (3,2) facing east
// - starting (1, 1) facing east, got right,            ending in (1,1) facing south
// - starting (1, 1) facing east, got right right,      ending in (1,1) facing west

it('should return true', ()=>{
    expect(false).to.be.true;
});