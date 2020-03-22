
//Piano Content
var intro = "<p>I picked up piano when I was 15 and within 3 years, attained Grade 6 for both Practical and Music Theory. Although my grade progression came to an abrupt halt due to A-Levels and NS commitments, I continued to play the piano as a hobby. Over the years, I have acquire a large repertoire of beautiful pieces from famous composers the likes of Mozart, Chopin, and Rachmaninoff.</p><p>Piano serves as a companion who offers me spiritual respite from the everyday humdrum of life. Playing it soothes my mind and helps me to relax, and allows me to enjoy the colourful side of life.</p>";
var repertoiresIntro = "<p>Some notable pieces that I have learnt in the past:</p>";
var futurePiecesIntro = "<p>Pieces that I intend to learn in the future:</p>";
var repertoires = ["Étude in C minor, Op. 10, No. 12, Revolutionary - Frédéric Chopin","Nocturne in E-flat major, Op. 9, No. 2 - Frédéric Chopin","Nocturne No. 20 in C -sharp minor, Op. posth. - Frédéric Chopin","Waltz in C-sharp minor, Op. 64, No. 2 - Frédéric Chopin","Waltz in B minor, Op. 69, No. 2 - Frédéric Chopin","Prelude in C-sharp minor, Op. 3, No. 2 - Sergei Rachmaninoff","Piano Sonata No. 16 in C major, K. 545 - Wolfgang Amadeus Mozart","Invention in A minor, No. 13, BWV 784 - Johann Sebastian Bach", "The Entertainer - Scott Joplin","Maple Leaf Rag - Scott Joplin"];
var futurePieces = ["La Campanella - Franz Liszt","Etude in C# minor, Op. 10, No. 4, Torrent - Frédéric Chopin","Twelve Variations on 'Ah vous dirai-je, Maman' - Wolfgang Amadeus Mozart","Prelude, Op. 28, No. 15, Raindrop - Frédéric Chopin","The Easy Winners - Scott Joplin"];
var repertoiresSection = "<ul>";
var futurePiecesSection = "<ul>";
for(i=0; i<repertoires.length;i++){
	repertoiresSection+= "<li>" + repertoires[i] + "</li>";
}
for(i=0; i<futurePieces.length;i++){
	futurePiecesSection+= "<li>" + futurePieces[i] + "</li>";
}
repertoiresSection+="</ul>";
futurePiecesSection+="</ul>";
document.getElementById("piano-content").innerHTML = intro + repertoiresIntro + repertoiresSection + futurePiecesIntro + futurePiecesSection;

//Cycling Content
var intro1 = "<p>My high school was strategically located in Tanjong Rhu. For 6 years, I was blessed with the privilege of a close proximity to East Coast Park, which is within walking distance from my school. And so I naturally picked up cycling. At first, my friends and I would cycle along ECP. Gradually, we increased the distance of our cycling route and soon we were cycling from Pasir Ris all the way to Gardens by the Bay on the regular.</p><p>I really enjoyed the sense of freedom cycling is able to instill in me. That feeling of cruising down a cycling path, with sceneries flashing across your eyes and wind blowing against your face, is extraordinary nigh impossible to convey in words alone. All I can say is, cycling is Awesome.</p><p>I am eagerly awaiting the completion of the Round Island Route, where I can finally take cycling to the next level.</p>";

document.getElementById("cycling-content").innerHTML = intro1;

//Gym Content
var intro2 = "<p>I was not the most healthy and active individual in the past, truth be told. My epicurean wants far outweighed (no pun intended) my body consciousness. As a result, I became overweight.</p><p>The precise moment I experienced a shift in attitude, I do not know. What I know is that I thoroughly enjoyed my first time in the gym. It was a painful process, but at the end of the day, the satisfaction I got after pushing my body to a new limit makes everything worthwhile. From then on, I started a workout routine which I adhered to religiously, and was able to gain muscles and lose weight in no time.</p><p>My end goal does not revolve around the egoistical pursuit of exceptional body standards. Instead, my end goal is to keep myself fit and active through doing what I enjoy. After all, a healthy body begets a happy life.</p>";

document.getElementById("gym-content").innerHTML = intro2;

//Book Content
var intro3 = "<p>Reading has always been a hobby of mine for as long as I could remember. Books stimulate imagination, expand horizon, and transport readers into surreal and other-worldly realms, all at little to no cost. That is what makes reading so appealing to me.</p><p>I have a predisposition for classic science fiction novels, notably those written by H. G. Wells. His futuristic ideas, in contrast with the fact that he lived in an era before the Scientific Revolution, render his works especially impressive and intriguing. I have taken a particular liking to his style of interweaving politics and philosophy into his story, which keeps me both engaged and intellectually stimulated.<p>In recent years, I have also started reading up on Philosophy. Through this difficult subject I have acquired a greater understanding of myself and my surroundings at large. When it comes to picking a favourite philopher, John Locke is my go to choice. His take on personal liberty and societal obligations resonates deeply with my own views. His liberal ideas and renegade nature against authority means that his ideas are far ahead of his time, which makes his works all the more interesting to read. I recommend everyone to check out John Locke, in particular his Two Treatises of Government.</p>";
var booksReadIntro = "<p>Some of the best pieces of literature I've read (IMHO):</p>";
var booksToReadIntro = "<p>Other titles I intend to read:</p>";
var booksRead = ["The Catcher in the Rye - J. D. Salinger","Crime and Punishment - Fyodor Dostoyevsky","Uncle Tom's Cabin - Harriet Beecher Stowe","The Alchemist - Paulo Coelho","The Island of Dr Moreau - H. G. Wells","The Time Machine - H. G. Wells","Two Treatises of Government - John Locke","Gatsby - F. Scott Fitzgerald"];
var booksToRead = ["A Letter Concerning Tolerance - John Locke","Twelve Years a Slave - Solomon Northup","Leviathan - Thomas Hobbes","The Adventure of Huckleberry Finn - Mark Twain","Fahrenheit 451 - Ray Bradbury"];
var booksReadSection = "<ul>";
var booksToReadSection = "<ul>";
for(i=0; i<booksRead.length;i++){
	booksReadSection+= "<li>" + booksRead[i] + "</li>";
}
for(i=0; i<futurePieces.length;i++){
	booksToReadSection+= "<li>" + booksToRead[i] + "</li>";
}
booksReadSection+="</ul>";
booksToReadSection+="</ul>";
document.getElementById("book-content").innerHTML = intro3 + booksReadIntro + booksReadSection + booksToReadIntro + booksToReadSection;