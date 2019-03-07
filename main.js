var deck = {lose_turn:"Miss a turn.", 
        block_animal :"Block the area.", 
        switch_deck:"Switch decks anyone.",
        naughty_racoon:"The naughty racoon had moved the animal to random location.",
        lose_points:"The person before you lose 3 points.",
        add_card:"Pick up a card from the deck.",
        drop_card:"the person after you lost one of their cards.",
        extra_turn:"You get another go.",
        reveal_deck:"Choose someone to show all their deck.",
        move_two:"Move a maximum of 2 steps in any direction.",
        steal_points:"Steal 3 points from anyone.",
        switch_points:"Swap points with anyone ",
        half_point:"Pick a person to get their points. If they have an odd amount of points round down!",
        helping_hand:"Choose someone. When its their turn to throw, you throw for them."}

var randomProperty = function (object) {
  var keys = Object.keys(object);
  return object[keys[Math.floor(keys.length * Math.random())]];
};