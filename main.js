const URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds')

fetch(URL)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        const breedsObj = data.message;
        const breedsArray = Object.keys(breedsObj);

        for (const el of breedsArray) {

            const option = document.createElement('option'); //create <option></option
            option.value = el // <option value="...">-->
            option.innerText = el.charAt(0).toUpperCase() + el.slice(1)

            select.appendChild(option)
        }
    })

select.addEventListener('change', event => {
    //console.log(event.target) //<option value="Beagle">Beagle</option>
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    //console.log(url); //we get now the url with image
    getDogImage(url)
    dogInfo.assignMF()
    dogInfo.assignAge()
    dogInfo.assignLikes()
    dogInfo.assignDislikes()
   dogInfo.assignFact()

})

const img = document.querySelector('.dog-img')

const getDogImage = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data.message); //we get the image url
            img.src = data.message //attach the image to the img src
        })
}

const dogInfo = {
    femaleNames: ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor", "Lauren", "Alyssa", "Kayla", "Abigail", "Brianna", "Olivia", "Emma", "Megan", "Grace", "Victoria", "Rachel", "Anna", "Sydney", "Destiny", "Morgan", "Jennifer", "Jasmine", "Haley", "Julia", "Kaitlyn", "Nicole", "Amanda", "Katherine", "Natalie", "Hailey", "Alexandra", "Savannah", "Chloe", "Rebecca", "Stephanie", "Maria", "Sophia", "Mackenzie", "Allison", "Isabella", "Amber", "Mary", "Danielle", "Gabrielle", "Jordan", "Brooke", "Michelle", "Sierra", "Katelyn", "Andrea", "Madeline", "Sara", "Kimberly", "Courtney", "Erin", "Brittany", "Vanessa", "Jenna", "Jacqueline", "Caroline", "Faith", "Makayla", "Bailey", "Paige", "Shelby", "Melissa", "Kaylee", "Christina", "Trinity", "Mariah", "Caitlin", "Autumn", "Marissa", "Breanna", "Angela", "Catherine", "Zoe", "Briana", "Jada", "Laura", "Claire", "Alexa", "Kelsey", "Kathryn", "Leslie", "Alexandria", "Sabrina", "Mia", "Isabel", "Molly", "Leah", "Katie", "Gabriella", "Cheyenne", "Cassandra", "Tiffany", "Erica", "Lindsey", "Kylie", "Amy", "Diana", "Cassidy", "Mikayla", "Ariana", "Margaret", "Kelly", "Miranda", "Maya", "Melanie", "Audrey", "Jade", "Gabriela", "Caitlyn", "Angel", "Jillian", "Alicia", "Jocelyn", "Erika", "Lily", "Heather", "Madelyn", "Adriana", "Arianna", "Lillian", "Kiara", "Riley", "Crystal", "Mckenzie", "Meghan", "Skylar", "Ana", "Britney", "Angelica", "Kennedy", "Chelsea", "Daisy", "Kristen", "Veronica", "Isabelle", "Summer", "Hope", "Brittney", "Lydia", "Hayley", "Evelyn", "Bethany", "Shannon", "Michaela", "Karen", "Jamie", "Daniela", "Angelina", "Kaitlin", "Karina", "Sophie", "Sofia", "Diamond", "Payton", "Cynthia", "Alexia", "Valerie", "Monica", "Peyton", "Carly", "Bianca", "Hanna", "Brenda", "Rebekah", "Alejandra", "Mya", "Avery", "Brooklyn", "Ashlyn", "Lindsay", "Ava", "Desiree", "Alondra", "Camryn", "Ariel", "Naomi", "Jordyn", "Kendra", "Mckenna", "Holly", "Julie", "Kendall", "Kara", "Jasmin", "Selena", "Esmeralda", "Amaya", "Kylee", "Maggie", "Makenzie", "Claudia", "Kyra", "Cameron", "Karla", "Kathleen", "Abby", "Delaney", "Amelia", "Casey", "Serena", "Savanna", "Aaliyah", "Giselle", "Mallory", "April", "Raven", "Adrianna", "Christine", "Kristina", "Nina", "Asia", "Natalia", "Valeria", "Aubrey", "Lauryn", "Kate", "Patricia", "Jazmin", "Rachael", "Katelynn", "Cierra", "Alison", "Macy", "Nancy", "Elena", "Kyla", "Katrina", "Jazmine", "Joanna", "Tara", "Gianna", "Juliana", "Fatima", "Allyson", "Gracie", "Sadie", "Guadalupe", "Genesis", "Yesenia", "Julianna", "Skyler", "Tatiana", "Alexus", "Alana", "Elise", "Kirsten", "Nadia", "Sandra", "Dominique", "Ruby", "Haylee", "Jayla", "Tori", "Cindy", "Sidney", "Ella", "Tessa", "Carolina", "Camille", "Jaqueline", "Whitney", "Carmen", "Vivian", "Priscilla", "Bridget", "Celeste", "Kiana", "Makenna", "Alissa", "Madeleine", "Miriam", "Natasha", "Ciara", "Cecilia", "Mercedes", "Kassandra", "Reagan", "Aliyah", "Josephine", "Charlotte", "Rylee", "Shania", "Kira", "Meredith", "Eva", "Lisa", "Dakota", "Hallie", "Anne", "Rose", "Liliana", "Kristin", "Deanna", "Imani", "Marisa", "Kailey", "Annie", "Nia", "Carolyn", "Anastasia", "Brenna", "Dana", "Shayla", "Ashlee", "Kassidy", "Alaina", "Rosa", "Wendy", "Logan", "Tabitha", "Paola", "Callie", "Addison", "Lucy", "Gillian", "Clarissa", "Destinee", "Josie", "Esther", "Denise", "Katlyn", "Mariana", "Bryanna", "Emilee", "Georgia", "Deja", "Kamryn", "Ashleigh", "Cristina", "Baylee", "Heaven", "Ruth", "Raquel", "Monique", "Teresa", "Helen", "Krystal", "Tiana", "Cassie", "Kayleigh", "Marina", "Heidi", "Ivy", "Ashton", "Clara", "Meagan", "Gina", "Linda", "Gloria", "Jacquelyn", "Ellie", "Jenny", "Renee", "Daniella", "Lizbeth", "Anahi", "Virginia", "Gisselle", "Kaitlynn", "Julissa", "Cheyanne", "Lacey", "Haleigh", "Marie", "Martha", "Eleanor", "Kierra", "Tiara", "Talia", "Eliza", "Kaylie", "Mikaela", "Harley", "Jaden", "Hailee", "Madalyn", "Kasey", "Ashlynn", "Brandi", "Lesly", "Elisabeth", "Allie", "Viviana", "Cara", "Marisol", "India", "Tatyana", "Litzy", "Melody", "Jessie", "Brandy", "Alisha", "Hunter", "Noelle", "Carla", "Francesca", "Tia", "Layla", "Krista", "Zoey", "Carley", "Janet", "Carissa", "Iris", "Kaleigh", "Tyler", "Susan", "Tamara", "Theresa", "Yasmine", "Tatum", "Sharon", "Alice", "Yasmin", "Tamia", "Abbey", "Alayna", "Kali", "Lilly", "Bailee", "Lesley", "Mckayla", "Ayanna", "Serenity", "Karissa", "Precious", "Jane", "Maddison", "Jayda", "Kelsie", "Lexi", "Phoebe", "Halle", "Kiersten", "Kiera", "Tyra", "Annika", "Felicity", "Taryn", "Kaylin", "Ellen", "Kiley", "Jaclyn", "Rhiannon", "Madisyn", "Colleen", "Joy", "Pamela", "Charity", "Tania", "Fiona", "Alyson", "Kaila", "Annabelle", "Emely", "Angelique", "Alina", "Irene", "Johanna", "Regan", "Janelle", "Janae", "Madyson", "Paris", "Justine", "Chelsey", "Sasha", "Paulina", "Mayra", "Zaria", "Skye", "Cora", "Brisa", "Emilie", "Felicia", "Larissa", "Macie", "Tianna", "Aurora", "Sage", "Lucia", "Alma", "Chasity", "Ann", "Deborah", "Nichole", "Jayden", "Alanna", "Malia", "Carlie", "Angie", "Nora", "Kailee", "Sylvia", "Carrie", "Elaina", "Sonia", "Genevieve", "Kenya", "Piper", "Marilyn", "Amari", "Macey", "Marlene", "Barbara", "Tayler", "Julianne", "Brooklynn", "Lorena", "Perla", "Elisa", "Kaley", "Leilani", "Eden", "Miracle", "Devin", "Aileen", "Chyna", "Athena", "Esperanza", "Regina", "Adrienne", "Shyanne", "Luz", "Tierra", "Cristal", "Clare", "Eliana", "Kelli", "Eve", "Sydnee", "Madelynn", "Breana", "Melina", "Arielle", "Justice", "Toni", "Corinne", "Maia", "Tess", "Abbigail", "Ciera", "Ebony", "Maritza", "Lena", "Lexie", "Isis", "Aimee", "Leticia", "Sydni", "Sarai", "Halie", "Alivia", "Destiney", "Laurel", "Edith", "Carina", "Fernanda", "Amya", "Destini", "Aspen", "Nathalie", "Paula", "Tanya", "Frances", "Tina", "Christian", "Elaine", "Shayna", "Aniya", "Mollie", "Ryan", "Essence", "Simone", "Kyleigh", "Nikki", "Anya", "Reyna", "Kaylyn", "Nicolette", "Savanah", "Abbie", "Montana", "Kailyn", "Itzel", "Leila", "Cayla", "Stacy", "Araceli", "Robin", "Dulce", "Candace", "Noemi", "Jewel", "Aleah", "Ally", "Mara", "Nayeli", "Karlee", "Keely", "Alisa", "Micaela", "Desirae", "Leanna", "Antonia", "Brynn", "Jaelyn", "Judith", "Raegan", "Katelin", "Sienna", "Celia", "Yvette", "Juliet", "Anika", "Emilia", "Calista", "Carlee", "Eileen", "Kianna", "Thalia", "Rylie", "Daphne", "Kacie", "Karli", "Rosemary", "Ericka", "Jadyn", "Lyndsey", "Micah", "Hana", "Haylie", "Madilyn", "Laila", "Blanca", "Kayley", "Katarina", "Kellie", "Maribel", "Sandy", "Joselyn", "Kaelyn", "Madisen", "Carson", "Kathy", "Margarita", "Stella", "Juliette", "Devon", "Camila", "Bria", "Donna", "Helena", "Lea", "Jazlyn", "Jazmyn", "Skyla", "Christy", "Katharine", "Joyce", "Karlie", "Lexus", "Salma", "Alessandra", "Delilah", "Moriah", "Celine", "Lizeth", "Beatriz", "Brianne", "Kourtney", "Sydnie", "Stacey", "Mariam", "Robyn", "Hayden", "Janessa", "Kenzie", "Jalyn", "Sheila", "Meaghan", "Aisha", "Jaida", "Shawna", "Estrella", "Marley", "Melinda", "Ayana", "Karly", "Devyn", "Nataly", "Loren", "Rosalinda", "Brielle", "Laney", "Lizette", "Sally", "Tracy", "Lilian", "Rebeca", "Chandler", "Jenifer", "Valentina", "America", "Candice", "Diane", "Abigayle", "Susana", "Aliya", "Casandra", "Harmony", "Jacey", "Alena", "Aylin", "Carol", "Shea", "Stephany", "Aniyah", "Zoie", "Jackeline", "Alia", "Savana", "Damaris", "Gwendolyn", "Violet", "Marian", "Anita", "Jaime", "Alexandrea", "Jaiden", "Kristine", "Carli", "Dorothy", "Gretchen", "Janice", "Annette", "Mariela", "Amani", "Maura", "Bella", "Kaylynn", "Lila", "Armani", "Anissa", "Aubree", "Kelsi", "Greta", "Kaya", "Kayli", "Lillie", "Willow", "Ansley", "Catalina", "Lia", "Maci", "Celina", "Shyann", "Alysa", "Jaquelin", "Kasandra", "Quinn", "Cecelia", "Mattie", "Chaya", "Hailie", "Haven", "Kallie", "Maegan", "Maeve", "Rocio", "Yolanda", "Christa", "Gabriel", "Kari", "Noelia", "Jeanette", "Kaylah", "Marianna", "Nya", "Kennedi", "Presley", "Yadira", "Elissa", "Nyah", "Reilly", "Shaina", "Alize", "Arlene", "Amara", "Izabella", "Lyric", "Aiyana", "Allyssa", "Drew", "Rachelle", "Adeline", "Jacklyn", "Jesse", "Citlalli", "Liana", "Giovanna", "Princess", "Selina", "Brook", "Elyse", "Graciela", "Cali", "Berenice", "Chanel", "Iliana", "Jolie", "Caitlynn", "Christiana", "Annalise", "Cortney", "Darlene", "Sarina", "Dasia", "London", "Yvonne", "Karley", "Shaylee", "Myah", "Amira", "Juanita", "Kristy", "Ryleigh", "Dariana", "Teagan", "Kiarra", "Ryann", "Yamilet", "Alexys", "Kacey", "Shakira", "Sheridan", "Baby", "Dianna", "Lara", "Isabela", "Reina", "Shirley", "Jaycee", "Silvia", "Tatianna", "Eryn", "Ingrid", "Keara", "Randi", "Reanna", "Kalyn", "Lisette", "Monserrat", "Lori", "Abril", "Ivana", "Kaela", "Maranda", "Parker", "Darby", "Darian", "Jasmyn", "Jaylin", "Katia", "Ayla", "Bridgette", "Hillary", "Kinsey", "Yazmin", "Caleigh", "Elyssa", "Rita", "Asha", "Dayana", "Nikita", "Chantel", "Reese", "Stefanie", "Nadine", "Samara", "Unique", "Michele", "Sonya", "Hazel", "Patience", "Cielo", "Mireya", "Paloma", "Aryanna", "Magdalena", "Anaya", "Dallas", "Arely", "Joelle", "Kaia", "Misty", "Norma", "Taya", "Deasia", "Trisha", "Elsa", "Joana", "Alysha", "Aracely", "Bryana", "Dawn", "Brionna", "Alex", "Katerina", "Ali", "Bonnie", "Hadley", "Martina", "Maryam"],
    maleNames: ["Sergio","Ryan","Bill","James","Marty","Angel","Pat","Toshiro","Yan-ping","Tetsuo","Akira","Jimmy","Carlos","William","Billy Bob","Manuel","Douglas","Steven","Howard","Donald","Barry","Thomas","Derek","Gary","Archie","Ned","Randy","Taylor","Kim","Roger","Raymond","Robert","Harvey","Aaron","George","Noel","Michael","Chuck","Lex","Charlie","Charles","Malcolm","Martin","Sean","Raven","Wolf","Miguel","Pablo","Paul","Jesus","Ali","Bruce","Dick","Phillip","Kirk","Kurt","John","Alexander","David","Beau","Mumtaz","Diwakar","Dale","Woody","Ariel","Hans","Jun","Chin-Yuan","Deepak","Christopher","Matthew","Joseph","James","Daniel","Robert","John","Kennedy","Jonathan","Adam","Justin","Robin","MrDefault"
    ],
    likesList: ['Loves it when you make the BED', 'To listen to music', 'Absolutely happy when you get back home', 'Enjoyes whatching TV', 'Adores sleeping in your bed', 'Drinking ice water from the puddles', 'Getting into the mud', 'Swimming in the pool', 'Barking really loud when you go out', 'Chewing your sleepers','Ice water from McDonalds','Kisses','Snuggles','Sniffing the air','Biting the wind','Trash cans','Raiding the cat box for treasure','Barking hello to friends','Stealing cat food','Sleeping in the car','Payaya','Stealing socks','New friends','Ear rubs','Sliced hot dogs','Running at top speed inside the house','Causing diversions','Bread','Sunbathing','Running through tall grass','Deep sighs','Ear scratchies','Licking people directly on the mouth','Destroying soft toys','The human bed','Squeaky toys','Sitting with (or on) people','Chicken','Going to bed after midnight',  'Puddles', 'Howling at Sirens','Staring out the window','Bubbles','Peanut butter','String cheese','Pats, rubs, and butt scritches', 'Your dirtiest, stinkiest, sweatiest clothes', 'Toys', 'Puzzles', 'Cheese', 'Bacon', 'Anything stolen off your plate', 'Swimming', 'Car Rides', 'Chasing squirrels', 'A nice, peaceful nap in a quiet spot', 'Sniffing the bushes', 'Sleeping in', 'Playing frisbee', 'Digging holes in the flower bed', 'Staring at you while pooping', 'Stealing blankets off the bed', 'Drinking out of puddles', 'Farting', 'Doing tricks', 'Agility', 'Barking at the delivery person', 'Stealing dirty laundry', 'Chewing your favorite shoe', 'Staring into space', 'Wrestling with friends', 'Going to the dog park', 'Getting as muddy as possible', 'Going on hikes', 'Annoying the cat', 'Playing tug of war', 'Waking you up at 4am for food', 'Staring at you with love', 'Sitting on your lap'],
    dislikesList: ['Eating alone', 'Roombas','Small children','Thunder','Staying clean after a bath','Nail trims','Being groomed','People','Showers','Being bored','Sharing food','Being home alone','Balloons','Suitcases','Being carried','Helicopters','Doorbells','Pillows','Landscapers/lawnmowers','Their own shadow','Going to bed late','Broccoli','Carrots','Vegetables','Vacuum clearners','Puddles', 'Bathing', 'Not being included', 'The neighbor', 'The UPS person', 'Garbage trucks', 'Thunderstorms', 'Wet grass', 'Burrs'],
    factList: ['Remembers every squirrel they have ever seen','Wishes they knew how cars work','Thinks pond water tastes the very best','Can carry three tennis balls at once and is very proud of that.','Eats grass for fun',"Doesn't actually know their own name, just likes your voice.",'Understands more words than you think','Saw a shooting star once','Will only sleep with 2 blankets','Ate an entire cake at a birthday party before anyone noticed','Can hear a bag of cheese opening from half a mile away',"Believes that frogs are smarter than they look","Once gave a grasshopper a ride on their nose","Doesn't understand the stock market",'Can sprint up to 30mph',"Believes they could win Crufts, but can't afford a plane ticket.","Wishes there weren't so many different streaming services.",'Secretly enjoys baths, but will never tell.','Ate a bee and got stung, then did it again the next day','Unsure of the meaning of life, but believes it may involve bacon.','Truly believes they are a cat','Can actually count to 12, but has never had a reason to do so.','Feels a sense of longing when watching birds migrate in the Fall.',"Enjoys watching SNL, but doesn't understand the jokes",'Sheds enough hair to fill a 5-gallon bucket each week.','Responds to commands in English, German, and Klingon.','Only pretends to understand what you are saying, loves you anyway.','Caught a squirrel once, and now dreams about that moment every single night.',
    "Knows exactly how the universe will end, but doesn't care.",'Would be a top-notch violinist, if they had thumbs.','Dreams of breaking into the dog food plant down the road and eating EVERYTHING.','Can see one more color than any other dog. You will never know which one it is.','Won the award for "fastest lick of the kitchen counter" in 2018 (self-awarded).','Ears and tail are the same length (big ears)!','Takes charge and loudly demands treats','Very bouncy, scientists suspects that legs may contain springs.',"Prefers to eat at the same time as the humans - it's only polite!",'Originally from Tijuana, unkown level of fluency in Spanish.','Favorite hobby is sculpting (the fence, with their mouth)','Can eat an entire loaf of bread in one sitting',"Thinks they are the cat's best friend, but the cat considers them an acquaintence, at best.",'Chooses whether to listen to you on a cas-by-case basis','Can escape any harness ever made','Has an extra toe','Caught a butterfly and immediately spit it back out','Fences are less of an obstacle and more of a suggestion','Terrified of the kitten','Once ate an entire pack of gum','Can consume a rawhide chew in 30 seconds','Farts every time they sit down','Can howl on pitch','Will immediately present belly for rubs','Dream job: bacon taste-tester','Career: retired actor/consultant'],
    MF: '',
    rname: '',
    age: '',
    likes: '',
    dislikes: '',
    fact: '',

    //assign S
    assignMF(){
        x = (Math.floor(Math.random() * 2)==0) //Math.random()>0.5 --> flip the coin
        if (x) {
            this.MF = 'Female'
            this.assignName(this.femaleNames)
         } else {
            this.MF = 'Male'
            this.assignName(this.maleNames)
         } 

         document.getElementById('MF').innerHTML = `S: ${this.MF}`
    },

    //assign the name
    assignName(arr){
        this.rname = arr[Math.floor(Math.random() * arr.length)]
        document.querySelector('.name').innerHTML = `${this.rname}`

    },

    assignAge(){
        this.age = Math.floor(Math.random() * 18 + 1)
        document.getElementById('age').innerHTML = `Age: ${this.age}`
    },

    //Fisher???Yates shuffle Algorithm , we use this for the next functions to choose random items from the arrays
    fisherYatesShuffle(array){
        let m = array.length, t, i;
        //while there is remaining elements to shuffle
        while(m){
            //pick a remaining element
            i = Math.floor(Math.random() * m--);
            // and swap it with the current element
            t = array[m]
            array[m] = array[i]
            array[i] = t;
        }
        return array;
    },


    assignLikes(){
        this.likes = this.fisherYatesShuffle(this.likesList).slice(0, 2);
        //console.log(this.likes);//get first 2 elements from the suffled array 
        document.getElementById('likes').innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`

    },

    assignDislikes(){
        this.dislikes = this.fisherYatesShuffle(this.dislikesList).slice(0, 2);
        //console.log(this.dislikes);//get first 2 elements from the suffled array 
        document.getElementById('dislikes').innerHTML = `Disikes: ${this.dislikes[0]}, ${this.dislikes[1]}`

    },
    
    assignFact(){
        
        this.fact = this.factList[Math.floor(Math.random() * this.factList.length)]
        document.getElementById('fun-fact').innerHTML = `Additional Info: ${this.fact}`
    }

}
