$(document).ready (function(){
	$("#getQuotes").click(function(){
		$("#line").addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
		    $("#line").removeClass();
		});
		$("#movie").addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
		    $("#movie").removeClass();
		});
		getNewQuote();
		window.scrollTo(0, $("#getQuotes").offset().top);
		changeButton();
	});
	
	function getNewQuote(){
		var quotes = [
			  			{"line":"A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means                   to.", "movie":"The Lord of the Rings"},
			  			{"line":"I see dead people.", "movie":"The Sixth Sense"},
              {"line":"Nobody tosses a dwarf.", "movie":"The Lord of the Rings"},
			  			{"line":"May the force be with you.", "movie":"Star Wars"},
			  			{"line":"That's not a knife. This is a knife!", "movie":"Crocodile Dundee"},
			  			{"line":"Hey Mick. Get stuffed!", "movie":"Crocodile Dundee"},
			  			{"line":"Frankly my dear, I don't give a damn.", "movie":"Gone with the wind"},
			  			{"line":"Hello. My name is Inigo Montoya. You killed my father. Prepare to die.", "movie":"The Princess               Bride"},
			  			{"line":"I’ll have what she’s having.", "movie":"When Harry met Sally"},
			  			{"line":"I'll be back.", "movie":"The Terminator"},
			  			{"line":"Leave the gun, take the cannoli.", "movie":"The Godfather"},
			  			{"line":"You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya punk?", "movie":"Dirty               Harry"},
			  			{"line":"Roads? Where we're going we don't need roads.", "movie":"Back to the Future"},
			  			{"line":"I’m having an old friend for dinner.", "movie":"The Silence of the Lambs"},
			  			{"line":"I'll get you, my pretty, and your little dog, too!", "movie":"Wizard of Oz"},
			  			{"line":"Wax on, wax off.", "movie":"The Karate Kid"},
			  			{"line":"Frankly my dear, I don't give a damn.", "movie":"Gone with the wind"},
			  			{"line":"I'm not oppressing you, Stan. You haven't got a womb! Where's the foetus gonna gestate? You                    gonna keep it in a box?", "movie":"Life of Brian"},
			  			{"line":"All right, but apart from the sanitation, the medicine, education, wine, public order,                       irrigation, roads, a fresh water system, and public health, what have the Romans ever done for us?",                    "movie":"Life of Brian"},
			  			{"line":"He's not the Messiah. He's a very naughty boy!", "movie":"Life of Brian"},
			  			{"line":"I fart in your general direction. Your mother was a hamster, and your father smelt of                         elderberries!", "movie":"Monty Python and the Holy Grail"},
			  			{"line":"We want...A SHRUBBERY!!!", "movie":"Monty Python and the Holy Grail"},
			  			{"line":"Even the smallest person can change the course of the future.", "movie":"The Lord of the                     Rings"},
			  			{"line":"I would rather share one lifetime with you than face all the Ages of this world alone.",                     "movie":"The Lord of the Rings"},
			  			{"line":"I ate his liver with some fava beans and a nice chianti.", "movie":"The Silence of the Lambs"},
			  			{"line":"Ray, when someone asks you if you're a god, you say YES!", "movie":"Ghostbusters"},
			  			{"line":"We came, we saw, we kicked its ass!", "movie":"Ghostbusters"},
			  			{"line":"Snakes. Why’d it have to be snakes?", "movie":"Raiders of the Lost Ark"},
			  			{"line":"He's not the Messiah. He's a very naughty boy!", "movie":"Life of Brian"},
			  			{"line":"There's no place like home", "movie":"Wizard of Oz"},
			  			{"line":"My mama always said life was like a box of chocolates. You never know what you're gonna get.",               "movie":"Forrest Gump"},
			  			{"line":"I feel the need - the need for speed!", "movie":"Top Gun"},
			  			{"line":"Carpe diem. Seize the day, boys. Make your lives extraordinary.", "movie":"Dead Poets                          Society"},
			  			{"line":"Mama says, 'Stupid is as stupid does.'", "movie":"Forrest Gump"},
			  			{"line":"Sure, they're cute now, but in a second they're gonna get mean, and they're gonna get ugly                   somehow, and there's gonna be a million more of them.", "movie":"Galaxy Quest"},
			  			{"line":"By Grabthar's hammer, you shall be avenged.", "movie":"Galaxy Quest"},
			  			{"line":"Never give up, never surrender!", "movie":"Galaxy Quest"},
			  			{"line":"This is your life and it's ending one minute at a time.", "movie":"Fight Club"},
			  			{"line":"I have been — and always shall be — your friend.", "movie":"Star Trek II: The Wrath of Khan"},
			  			{"line":"Live long, and prosper.", "movie":"Star Trek: First Contact"},
			  			{"line":"Resistance is futile", "movie":"Star Trek: First Contact"},
			  			{"line":"Whoever said the human race was logical?", "movie":"Star Trek IV: The Voyage Home"},
			  			{"line":"Well that's simply the way they talk here. Nobody pays any attention to you unless you swear                 every other word.", "movie":"Star Trek IV: The Voyage Home"},
			  			{"line":"Admiral, there be whales here!", "movie":"Star Trek IV: The Voyage Home"},
			  			{"line":"Keyboard. How quaint.", "movie":"Star Trek IV: The Voyage Home"},
			  			{"line":"May the odds be ever in your favor!", "movie":"The Hunger Games"},
			  			{"line":"But our lives aren’t just measured in years, they’re measured in the lives of the people we                   touch around us.", "movie":"The Hunger Games: Catching fire"},
			  			{"line":"Everyone’s either gonna want to kiss you, kill you, or be you.", "movie":"The Hunger Games:                   Mockingjay - Part I"},
			  			{"line":"Never trust anything that can think for itself if you can’t see where it keeps its brain.",                   "movie":"Harry Potter and the Chamber of Secrets"},
			  			{"line":"To the well-organized mind, death is but the next great adventure.", "movie":"Harry Potter and               the Sorcerer’s Stone"},
			  			{"line":"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to                 our friends.", "movie":"Harry Potter and the Sorcerer’s Stone"},
			  			{"line":"It does not do to dwell on dreams and forget to live.", "movie":"Harry Potter and the                         Sorcerer’s Stone"},
			  			{"line":"Go ahead, make my day.", "movie":"Sudden Impact"},
			  			{"line":"They may take our lives, but they'll never take our freedom!", "movie":"Braveheart"},
			  			{"line":"Do or do not. There is no try.", "movie":"Star Wars: The Empire Strikes Back"},
			  			{"line":"As my plastic surgeon always said, if you gotta go, go with a smile.", "movie":"Batman"},
			  			{"line":"Keep your friends close, but your enemies closer.", "movie":"The Godfather: Part II"},
			  			{"line":"It's the safest thing you'll ever have between your legs.", "movie":"Girls just want to have                 fun"},
			  			{"line":"Like a chicken with the face of a monkey, I fly!", "movie":"Frozen"},
			  			{"line":"As you wish.", "movie":"The Princess Bride"},
			  			{"line":"Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",               "movie":"Ferris Bueller's Day Off"},
			  			{"line":"Stay frosty.", "movie":"Aliens"},
			  			{"line":"Kid, I'm putting together a little concern, which would enable those of us in our, uh, rarified               profession to avoid embarrassing overlaps.", "movie":"Grosse Point Blank"},
			  			{"line":"I’m afraid I can’t let you do that Dave.", "movie":"2001: A Space Odyssey"},
			  			{"line":"Use your head…that lump three feet above your ass.", "movie":"A League of Their Own"},
			  			{"line":"Are you crying? Are you crying? There’s no crying in baseball!", "movie":"A League of Their                   Own"},
			  			{"line":"Sell crazy somewhere else. We’re all stocked up here.", "movie":"As Good As It Gets"},
			  			{"line":"What if this is as good as it gets?", "movie":"As Good As It Gets"},
			  			{"line":"You make me want to be a better man.", "movie":"As Good As It Gets"},
			  			{"line":"Why must I be surrounded by frickin’ idiots?", "movie":"Austin Powers: International Man of                   Mystery"},
			  			{"line":"Let me tell you a little story about a man named Sh! Sh! even before you start. That was a pre-               emptive “sh!” Now, I have a whole bag of “sh!” with your name on it.", "movie":"Austin Powers:                         International Man of Mystery"},
			  			{"line":"You were only supposed to blow the bloody doors off!", "movie":"The Italian Job"},
			  			{"line":"All those moments will be lost in time... like tears in rain... Time to die.", "movie":"Blade                 Runner"},
			  			{"line":"You’re one groovy baby…baby.", "movie":"Austin Powers: The Spy Who Shagged Me"},
			  			{"line":"I am Groot!", "movie":"Guardians of the Galaxy"},
			  			{"line":"No, Mini-Me, we do not gnaw on our kitty, we just stroke him and love him.", "movie":"Austin                 Powers: The Spy Who Shagged Me"},
			  			{"line":"Get over here! I’m gonna eat ya! I’m bigger than you. I’m higher on the food chain. Get in my                 belly!", "movie":"Austin Powers: The Spy Who Shagged Me"},
			  			{"line":"I've got a bad feeling about this.", "movie":"Star Wars"},
			  			{"line":"These aren't the droids you are looking for.", "movie":"Star Wars: A New Hope"},
			  			{"line":"There’s that word again, “heavy.” Why are things so heavy in the future? Is there a problem                   with the earth’s gravitational pull?", "movie":"Back to the Future"},
			  			{"line":"Last night, Darth Vader came down from the planet Vulcan and said that if I didn’t take                       Lorraine to the dance, that he’d melt my brain.", "movie":"Back to the Future"},
			  			{"line":"Let’s see if you bastards can do 90.", "movie":"Back to the Future"},
			  			{"line":"Have you ever danced with the devil in the pale moonlight?", "movie":"Batman"},
			  			{"line":"Hi, and welcome to the future. San Dimas, California, 2688. And I’m telling you, everything is               great. The air is clean. The water is clean. Even the dirt is clean.", "movie":"Bill & Ted's Excellent                 Adventure"},
			  			{"line":"It’s awfully easy to lie when you know that you’re trusted implicitly. So very easy, and so                    very degrading.", "movie":"Brief Encounter"},
			  			{"line":"I’ve fallen in love. I didn’t think such violent things could happen to ordinary people.",                   "movie":"Brief Encounter"},
			  			{"line":"I gotta keep breathing. Because tomorrow the sun will rise. Who knows what the tide could                     bring?", "movie":"Cast Away"},
			  			{"line":"Shut up, Wilson!", "movie":"Cast Away"},
			  			{"line":"We live and we die by time. And we must not commit the sin of losing our track on time.",                     "movie":"Cast Away"},
			  			{"line":"I hate to see you leave, but I love watching you go.", "movie":"Face/Off"},
			  			{"line":"You can’t just walk out of a drive-in.", "movie":"Grease"},
			  			{"line":"You’re gonna need a bigger boat.", "movie":"Jaws"},
			  			{"line":"The greatest thing you’ll ever learn is just to love and be loved in return.", "movie":"Moulin               Rouge!"},
			  			{"line":"It don't matter if you win by an inch or a mile. Winning's winning.", "movie":"The Fast and the               Furious"},
			  			{"line":"The problem is not the problem. The problem is your attitude about the problem.",                             "movie":"Pirates of the Carribean"},
			  			{"line":"Why's the rum gone?", "movie":"Pirates of the Carribean"},
			  			{"line":"I’ll find those stairs. I’ll whip their butt, too. Those stairs won’t know which way they’re                 going.", "movie":"Shrek"},
			  			{"line":"No! Not the buttons! Not the gumdrop buttons!", "movie":"Shrek"},
			  			{"line":"That’ll do, Donkey. That’ll do.", "movie":"Shrek"},
			  			{"line":"I’m a Mog – half-man, half-dog. I’m my own best friend.", "movie":"Spaceballs"},
			  			{"line":"No sir. I didn’t see you playing with your dolls again.", "movie":"Spaceballs"},
			  			{"line":"You idiots! These are not them! You’ve captured their stunt doubles!", "movie":"Spaceballs"},
			  			{"line":"Oh for goodness sakes, get down off that crucifix, someone needs the wood!", "movie":"The                     Adventures of Priscilla, Queen of the Desert"},
			  			{"line":"That’s just what this country needs: a cock in a frock on a rock.", "movie":"The Adventures of               Priscilla, Queen of the Desert"},
			  			{"line":"So this is Hell. And there’s a crucifix in it.", "movie":"The Birdcage"},
			  			{"line":"I’m trying to free your mind, Neo. But I can only show you the door. You’re the one that has to               walk through it.", "movie":"The Matrix"},
			  			{"line":"Don’t dream it, be it.", "movie":"The Rocky Horror Picture Show"},
			  			{"line":"People should not be afraid of their governments. Governments should be afraid of their                       people.", "movie":"V for Vendetta"},
			  			{"line":"You remind me of someone..it must be you!", "movie":"While you were sleeping"},
			  			{"line":"You’re born into a family. You do not join them like you do the Marines.", "movie":"While you                 were sleeping"},
			  			{"line":"Violet, you’re turning violet, Violet!", "movie":"Willy Wonka and the Chocolate Factory"},
			  			{"line":"We are the knights who say ‘Ni!’", "movie":"Monty Python and the Holy Grail"},
			  			{"line":"You don’t frighten us, English pig dogs! Go and boil your bottoms, you sons of a silly                       person!", "movie":"Monty Python and the Holy Grail"},
			  			{"line":"And if I were you, I wouldn't leave anybody for not paying attention to me. Because sooner or                 later you're gonna have to leave everybody. You understand me?", "movie":"Beaches"},
			  			{"line":"You're not dead yet, so stop living as if you are!", "movie":"Beaches"},
			  			{"line":"Eh Steve, can you move the Camira? I need to get the Torana out to get the Commodore.",                       "movie":"The Castle"},
			  			{"line":"Are you suggesting that coconuts migrate?", "movie":"Monty Python and the Holy Grail"},
			  			{"line":"If it bleeds, we can kill it.", "movie":"Predator"},
			  			{"line":"Hiya kids. Here is an important message from your Uncle Bill. Don't buy drugs. Become a pop                   star, and they give you them for free!", "movie":"Love Actually"},
			  			{"line":"Why are you wearing that stupid man suit?", "movie":"Donnie Darko"},
			  			{"line":"Let me get this straight: our father was romantically involved with a guy that could fit in his               pocket, and you're mad because he's white?", "movie":"Death at a Funeral (2010)"},
			  			{"line":"I hope that when the world comes to an end, I can breathe a sigh of relief, because there will               be so much to look forward to.", "movie":"Donnie Darko"},
			  			{"line":"Every creature on this Earth dies alone.", "movie":"Donnie Darko"},
			  			{"line":"You're terrible, Muriel.", "movie":"Muriel's Wedding"},
			  			{"line":"I was born ready.", "movie":"Smokey and the Bandit"},
			  			{"line":"You can't take away the wifi!!!", "movie":"This is 40"},
			  			{"line":"But the most important rule, the rule you can never forget, no matter how much he cries, no                   matter how much he begs, never feed him after midnight.", "movie":"Gremlins"},
			  			{"line":"I only gamble with my life, never my money.", "movie":"The Mummy"},
			  			{"line":"All right, you alien assholes! In the words of my generation: Up... YOURS!",                                 "movie":"Independence Day"},
			  			{"line":"It's a fine line between standing behind a principle and hiding behind one. You can tolerate a               little compromise, if you're actually managing to get something accomplished.", "movie":"Independence                 Day"},
			  			{"line":"Bright light! Bright light!", "movie":"Gremlins"},
              {"line":"The first rule of fight club is: you do not talk about fight club.", "movie":"Fight Club"},
			  			];
    
		          var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		              $("#line").html(randomQuote.line);
		              $("#movie").html(randomQuote.movie);
	  }
	
	  function changeButton(){
		        var labels = ["Go ahead, make my day", "Carpe diem", "Bond. James Bond", "Show me the money!", "Here's                 Johnny!", "Hasta la vista, baby","They're here!", "Make it so"];
		        var randomLabels = labels[Math.floor(Math.random()*labels.length)];           
		        $("#getQuotes").html(randomLabels);
	  }
});