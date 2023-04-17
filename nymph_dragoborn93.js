/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Races
	Effect:		This script adds a race, Nymph, with 7 subraces: Alseid, Asteria, Aurae, Dryad, Lampad, Oread, and Naiad
	Code by:	u/CarmenEtTerror
	Date:		16 APR 2023
    Source: Nymph by u/Dragoborn93, found online at https://www.gmbinder.com/share/-M4dNGXFlkBi1OPjuUDX
*/

var iFileName = "Nymph with Alseid, Asteria, Aurae, Dryad, Lampad, Oread, and Naiad subraces [by u/Dragoborn93, transcribed by u/CarmenEtTerror].js";
RequiredSheetVersion("13.1");

SourceList["NYM"] = {
	name : "Nymph",
	abbreviation : "NYM",
	group : "Homebrew",
	url : "https://www.gmbinder.com/share/-M4dNGXFlkBi1OPjuUDX",
    altUrl: "https://www.reddit.com/r/UnearthedArcana/comments/fzz4b8/nymphling_race_i_know_we_arent_getting_it_in_moot/",
	date : "2020/04/12"
};

ArmourList["Rough Skin"] = {
	name: "Rough Skin",
	source: ["NYM", 1],
	regExpSearch : /^(?=.*rough)(?=.*skin).*$/i,
	ac: 13,
	// AC for Dense Fur is actually 12 + Dex Mod
},
RaceList ["nymph"] = {
	regExpSearch : /nymph/i,
	name : "Nymph",
	sortname : "Nymph",
	source : ["NYM", 2],
	plural : "Nymphs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Nymph: +2 Charisma;",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Nymph (+2 Charisma)\nDarkvision: I can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray." +
	"\nFey Ancestry\n  You have advantage on saving throws against being charmed and magic can't put you to sleep.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
  	adv_vs:["charmed"]
	},
};

AddRacialVariant("nymph", "alseid", {
	regExpSearch : /^(?=.*nymph)(?=.*(alseid)).*$/i,
	name : "Alseid",
	sortname : "Nymph, Alseid",
	source : ["NYM", 2],
	plural : "Alseids",
	size : 3,
	speed : {
		walk : {spd : 30, enc : 20},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Alseid: +1 Wisdom, +2 Charisma",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Healing Hands\n  Once per long rest, I can touch a creature as an action and heal a number of hit points equal to my level." +
	"\nMasked in the Field\n  I can hide in grass, even when only lightly obscured, with advantage.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
  	adv_vs:["charmed"]
	},
	dmgres : ["Radiant"],
});

AddRacialVariant("nymph", "asteria", {
	regExpSearch : /^(?=.*nymph)(?=.*(asteria)).*$/i,
	name : "Asteria",
	sortname : "Nymph, Asteria",
	source : ["NYM", 2],
	plural : "Asteriae",
	size : 3,
	speed : {
		walk : {spd : 30, enc : 20},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Asteria: +1 Intelligence, +2 Charisma",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Light Bringer\n  I know the Dancing Lights cantrip. When I reach 3rd level, I can cast the Faerie Fire spell, and upon reaching 5th level, I can cast the Moonbeam spell. Once I cast a spell with this trait, I cannot do so again until I finish a long rest. Wisdom is my spellcasting ability for these spells." +
	"\nStarry Eyes\n  My heritage makes me want to be friends with everyone. I have proficiency in a Charisma skill of my choice.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
  	adv_vs:["charmed"]
	},
	skillstxt : "Chose any Charisma-based skill",
	spellcastingAbility : 5,
  spellcastingBonus : {
    name:"Light Bringer (level 1)",
    spells:["dancing lights"],
    selection:["dancing lights"],
    firstCol:"atwill",
	},
  features:{
      "faerie fire" : {
      	name:"Light Bringer (level 3)",
      	limfeaname:"Faerie Fire",
      	minlevel:3,
      	usages:1,
      	recovery:"long rest",
      	spellcastingBonus:{
        	name:"Light Bringer (level 3)",
        	spells:["faerie fire"],
        	selection:["faerie fire"],
        	firstCol:"oncelr"
      	}
      },
      "moonbeam":{
        name:"Light Bringer (level 5)",
        limfeaname:"Moonbeam",
        minlevel:5,
        usages:1,
        recovery:"long rest",
        spellcastingBonus:{
          name:"Light Bringer (level 5)",
          spells:["moonbeam"],
          selection:["moonbeam"],
          firstCol:"oncelr"
        }
      }
    }
});

AddRacialVariant("nymph", "aura", {
	regExpSearch : /^(?=.*nymph)(?=.*(aura)).*$/i,
	name : "Aura",
	sortname : "Nymph, Aurae",
	source : ["NYM", 2],
	plural : "Aurae",
	size : 3,
	speed : {
		walk : {spd : 35, enc : 25},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Aurae: +1 Dexterity, +2 Charisma",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Light as Air\n  I am permanently under the effects of the Feather Fall spell." +
	"\nWind Sense\nAs an action once per long rest, for one minute I gain Blindsense of 60 ft.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
		immune : ["fall damage"],
  adv_vs:["charmed"]},

});

AddRacialVariant("nymph", "dryad", {
	regExpSearch : /^(?=.*nymph)(?=.*(dryad)).*$/i,
	name : "Dryad",
	sortname : "Nymph, Dryad",
	source : ["NYM", 2],
	plural : "Dryads",
	size : 3,
	speed : {
		walk : {spd : 30, enc : 20},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Dryad: +1 Wisdom, +2 Charisma",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Tree Step\n  Once per short rest, I can expend all my movement to step into one living tree within reach and appear within 5 ft of a second living tree within 100 ft. Both trees must be Large or larger. This does not provoke opportunity attacks." +
	"\nWild Influence\nI know Druidcraft and can community with Small and Tiny beasts and plants.",
	vision : ["Darkvision", 60],
	savetxt : {
    text : ["Magic can't put me to sleep"],
  	adv_vs : ["charmed"]
	},
	spellcastingBonus : {
    name : "Wild Influence",
    spells : ["druidcraft"],
    selection : ["druidcraft"],
    firstCol : "atwill",
	},
	features : {
		"tree step" : {
			name : "Tree Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Tree Step)",
			action : ["action", ""],
		},
	},
});

AddRacialVariant("nymph", "lampad", {
	regExpSearch : /^(?=.*nymph)(?=.*(lampad)).*$/i,
	name : "Lampad",
	sortname : "Nymph, Lampad",
	source : ["NYM", 3],
	plural : "Lampads",
	size : 3,
	speed : {
		walk : {spd : 30, enc : 20},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Lampad: +1 Constitution, +2 Charisma",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Light Bringer\n  I know the Chill Touch cantrip. When I reach 3rd level, I can cast the Blur spell, and upon reaching 5th level, I can cast the Gentle Repose spell. Once I cast a spell with this trait, I cannot do so again until I finish a long rest. Wisdom is my spellcasting ability for these spells." +
	"\nCorpse Step\n  Once per short rest, I can expend all my movement to step into one humanoid corpse within reach and appear within 5 ft of a second humanoid corpse within 100 ft. This does not provoke opportunity attacks.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
  adv_vs:["charmed"]},
	spellcastingAbility:5,
  spellcastingBonus:{
    name:"Foot in the Styx (level 1)",
    spells:["chill touch"],
    selection:["chill touch"],
    firstCol:"atwill"},
  features:{
      "blur":{
      	name:"Foot in the Styx (level 3)",
      	limfeaname:"Blur",
      	minlevel:3,
      	usages:1,
      	recovery:"long rest",
      	spellcastingBonus:{
        	name:"Foot in the Styx (level 3)",
        	spells:["blur"],
        	selection:["blur"],
        	firstCol:"oncelr"
      	}
      },
      "gentle repose":{
        name:"Foot in the Styx (level 5)",
        limfeaname:"Gentle Repose",
        minlevel:5,
        usages:1,
        recovery:"long rest",
        spellcastingBonus:{
          name:"Foot in the Styx (level 5)",
          spells:["gentle repose"],
          selection:["gentle repose"],
          firstCol:"oncelr"
        }
      },
		"corpse step" : {
			name : "Corpse Step",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Corpse Step)",
			action : ["action", ""],
		},
	},
});

AddRacialVariant("nymph", "oread", {
	regExpSearch : /^(?=.*nymph)(?=.*(oread)).*$/i,
	name : "Oread",
	sortname : "Nymph, Oread",
	source : ["NYM", 3],
	plural : "Oreads",
	size : 3,
	speed : {
		walk : {spd : 30, enc : 20},
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Oread: +1 Strength, +2 Charisma",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Masked in Fire\n  I can hide when only lightly obscured by any source of fire with advantage.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
  	adv_vs:["charmed"]
	},
	addarmor : "Rough Skin",
	dmgres : ["Fire"],
});

AddRacialVariant("nymph", "naiad", {
	regExpSearch : /^(?=.*nymph)(?=.*(naiad)).*$/i,
	name : "Naiad",
	sortname : "Nymph, Naiad",
	source : ["NYM", 3],
	plural : "Naiads",
	size : 3,
	speed : {
		walk : {spd : 30, enc : 20},
		swim : {spd : 30, enc : 20}
	},
	languageProfs : ["Common", "Sylvan"],
	age : " are effectively ageless",
	height : " range from barely 5 feet to well over 6 feet tall",
	weight : " weigh between 90 and 150 lbs",
	improvements : "Naiad: +1 Dexterity, +2 Charisma",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Bubble Speech\n  I can speak to any creature with an innate swimming speed as if we shared a language." +
	"\nWater Born\n  I can breathe both air and water." +
	"\nMasked in Water\n  I can hide in water, even when only lightly obscured, with advantage.",
	vision : ["Darkvision", 60],
	savetxt:{
    text:["Magic can't put me to sleep"],
  adv_vs:["charmed"]},
	dmgres : ["Radiant"],
});
