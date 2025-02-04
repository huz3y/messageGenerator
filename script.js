let typeFacts = 0;
let typeJokes = 0;
let typeInspiration = 0;
let chooseMessage = 0;
const messageType = ['Facts', 'Jokes', 'Inspirational Quote'];
const facts = ["Australia is wider than the moon.",
    "Venus is the only planet to spin clockwise.",
    "Human teeth are the only part of the body that cannot heal themselves.",
    "Lemons float, but limes sink.",
    "It would take 19 minutes to fall to the center of the Earth.",
    "The real name for a hashtag is an octothorpe.",
    "The longest English word is 189,819 letters long.",
    "The tiny pocket in jeans was designed to store pocket watches.",
    "There were active volcanoes on the moon when dinosaurs were alive.",
    "The circulatory system is more than 60,000 miles long.",
    "It’s impossible to hum while holding your nose.",
    "The longest time someone has spent holding their breath underwater is 24 minutes and 37 seconds. ",
    "Bats are the only flying mammals. ",
    "Tomatoes are a fruit, not a vegetable. ",
    "Snakes smell with their tongue.",
    "A chicken once lived for 18 months without its head.",
    "Ketchup was once sold as medicine. ",
    "A sheep was the first animal to be cloned. ",
    "Platypuses sweat milk.",
    "Bananas glow blue under black lights.",
    "Comets smell like rotten eggs. ",
    "Bees can fly higher than Mount Everest.",
    "Peanuts aren’t a type of nut.",
    "Blue whale tongues can weigh as much as an elephant.",
    "Ants don’t have lungs.",
    "There’s a planet made almost entirely of diamonds.",
    "Sea otters sleep while holding hands."
];
const jokes = [
    "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
    "I went to buy some camo pants but couldn’t find any.",
    "I failed math so many times at school, I can’t even count.",
    "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
    "I know they say that money talks, but all mine says is ‘Goodbye.’",
    "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
    "Most people are shocked when they find out how bad I am as an electrician.",
    "Never trust atoms; they make up everything.",
    "Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
    "Build a man a fire and he’ll be warm for a day. Set a man on fire and he’ll be warm for the rest of his life.",
    "I don’t suffer from insanity—I enjoy every minute of it.",
    "The last thing I want to do is hurt you; but it’s still on the list.",
    "The problem isn’t that obesity runs in your family. It’s that no one runs in your family.",
    "Today a man knocked on my door and asked for a small donation toward the local swimming pool. I gave him a glass of water.",
    "I’m reading a book about anti-gravity. It’s impossible to put down.",
    "\"Doctor, there’s a patient on line one that says he’s invisible.\"\"Well, tell him I can’t see him right now.\"",
    "A recent study has found that women who carry a little extra weight live longer than the men who mention it.",
    "The future, the present, and the past walk into a bar. Things got a little tense.",
    "Before you criticize someone, walk a mile in their shoes. That way, when you do criticize them, you’re a mile away and you have their shoes.",
    "I got a new pair of gloves today, but they’re both ‘lefts,’ which on the one hand is great, but on the other, it’s just not right",
    "I didn’t think orthopedic shoes would help, but I stand corrected.",
    "I was riding a donkey the other day when someone threw a rock at me and I fell off. I guess I was stoned off my ass.",
    "I just got kicked out of a secret cooking society. I spilled the beans.",
    "Just got fired from my job as a set designer. I left without making a scene.",
    "Refusing to go to the gym is a form of resistance training."
];
const inspiration = [
    "\"When you have a dream, you've got to grab it and never let go.\"— Carol Burnett",
    "\"There is nothing impossible to they who will try.\" — Alexander the Great",
    "\"The bad news is time flies. The good news is you're the pilot.\"—Michael Altshuler",
    "\"Life has got all those twists and turns. You've got to hold on tight and off you go.\"— Nicole Kidman",
    "\"Keep your face always toward the sunshine, and shadows will fall behind you.\"— Walt Whitman",
    "\"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.\"— Duchess Meghan",
    "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"—Winston Churchill",
    "\"You define your own life. Don't let other people write your script.\"— Oprah Winfrey",
    "\"You are never too old to set another goal or to dream a new dream.\"— Malala Yousafzai",
    "\"At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.\"— Dr. Phil",
    "\"If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.\"— Gabrielle Bernstein",
    "\"No matter what people tell you, words and ideas can change the world.\"— Robin Williams  as John Keating in Dead Poets Society",
    "\"It is during our darkest moments that we must focus to see the light.\"— Aristotle",
    "\"Not having the best situation, but seeing the best in your situation is the key to happiness.\"— Marie Forleo",
    "\"Believe you can and you're halfway there.\" —Theodore Roosevelt",
    "\"Weaknesses are just strengths in the wrong environment.\"— Marianne Cantwell",
    "\"Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.\"— Morgan Freeman",
    "\"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.\"— Eleanor Roosevelt",
    "\"Live your beliefs and you can turn the world around.\"— Henry David Thoreau",
    "\"Life is like riding a bicycle. To keep your balance, you must keep moving.\"—Albert Einstein",
    "\"When it comes to luck, you make your own.\"— Bruce Springsteen",
    "\"We generate fears while we sit. We overcome them by action.\"— Dr. Henry Link",
    "\"When you've seen beyond yourself, then you may find, peace of mind is waiting there.\"— George Harrison",
    "\"Out of the mountain of despair, a stone of hope.\"— Martin Luther King, Jr.",
    "\"You are never too old to set another goal or to dream a new dream.\"— C.S. Lewis",
    "\"The simple act of listening to someone and making them feel as if they have truly been heard is a most treasured gift.\"— L. A. Villafane",
    "\"We need to take risks. We need to go broke. We need to prove them wrong, simply by not giving up.\"— Awkwafina",
    "\"The only limit to our realization of tomorrow will be our doubts today.\"— Franklin Delano Roosevelt",
    "\"It is never too late to be what you might have been.\"— George Eliot",
    "\"Definitions belong to the definers, not the defined.\"— Toni Morrison",
    "\"Perfection is not attainable, but if we chase perfection we can catch excellence.\"— Vince Lombardi",
    "\"A lot of people are afraid to say what they want. That's why they don't get what they want.\"— Madonna",
    "\"In order for the light to shine so brightly, the darkness must be present.\"— Sir Francis Bacon",
    "\"It ain't about how hard you hit. It’s about how hard you can get hit and keep moving forward.\"— Sylvester Stallone in Rocky Balboa",
    "\"If my mind can conceive it, if my heart can believe it, then I can achieve it.\"— Muhammad Ali"
];

const chooseType = Math.floor(Math.random() * 3);

switch (chooseType) {
    case 0:
        typeFacts = 1;
        break;
    case 1:
        typeJokes = 1;
        break;
    case 2:
        typeInspiration = 1;
        break;
    default:
        break;
}

if(typeFacts)   {
    chooseMessage = Math.floor(Math.random() * 27);
    console.log("\n");
    console.log("Wanna hear an interesting fact.\n");
    for(let i=0; i<facts.length; i++)   {
        if(chooseMessage === i) {
            console.log(facts[i]);
            console.log("\nFor more interesting facts, run again.");
            console.log("\n");
        } else  {
            continue;
        }
    }
} else if (typeJokes)   {
    chooseMessage = Math.floor(Math.random() * 25);
    console.log("\n");
    console.log("Wanna hear an fun joke.\n");
    for(let i=0; i<jokes.length; i++)   {
        if(chooseMessage === i) {
            console.log(jokes[i]);
            console.log("\nFor more fun jokes, run again.");
            console.log("\n");
        } else  {
            continue;
        }
    }
} else if (typeInspiration) {
    chooseMessage = Math.floor(Math.random() * 35);
    console.log("\n");
    console.log("Wanna hear some inspiration.\n");
    for(let i=0; i<inspiration.length; i++)   {
        if(chooseMessage === i) {
            console.log(inspiration[i]);
            console.log("\nFor more inspiration, run again.");
            console.log("\n");
        } else  {
            continue;
        }
    }
}