const solaire_yaml= 
`Solaire: 
  class_levels:
    fighter: 4
  level_up_choices:
    fighting_style: dueling
    subclass: champion
  ancestry: Minotaur
  ability_scores: [20,12,16,11,10,9]
  sprites:
    portrait: solaire_portrait_lofi.png
    game_piece: solaire_token_blk.png
  profencies: [athletics, acrobatics, perception, animal_handling]
  inventory: [\"Plate Mail\", \"longsword\" ]
  senses: 
    darkvision: 60
  speed:
    land: 30
  experience: 1234
  languages: Common, Minos
  game_moves:
    longsword:
      parent_move: 'BasicAttack'
      dmg_dice: '1d8'
      stat: 'str'
`;
//   Traits: direct, stubborn, perfectionist
//   Ideals: please use swords responsibly
//   Bonds: used to work on the docks on Minos
//   Flaws: has a hard time letting unfair things be

export default solaire_yaml;