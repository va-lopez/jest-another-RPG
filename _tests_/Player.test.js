const Player = require('../lib/Player.js');

test('creates a new player object', () => {
    const player = new Player('name');

    expect(player.name).toEqual(expect.any(String));
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});

test('gets a players stats as an object', () => {
    const player = new Player('name');
    expect(player.getStats()).toEqual(Object);
});

test('gets inventory from player or returns false', () => {
    
})