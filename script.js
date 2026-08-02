import java.util.ArrayList;

class Person{
    constructor(name, games, sympathy, awesome) {
        this.name = name;
        this.games = games;
        this.sympathy = sympathy;
        this.awesome = awesome;
        this.id = `${name.replaceAll(" ", "").toLowerCase()}`;

        this.score = this.calculateScore();
        this.currentRank = 0;

        this.link = null;
    }

    calculateScore() {
        let totalPoints = 0;
        this.games.forEach(game => {
            totalPoints += points(this.name, game.person2, game.quantity);
        });
        totalPoints = totalPoints + this.sympathy + this.awesome;
        return totalPoints;
    }
}

class Game{
    constructor(person1, person2, type, quantity) {
        this.person1 = person1;
        this.person2 = person2;
        this.type = type;
        this.quantity = quantity;
    }
}


function points(name, p2, quantity){
    let currentPoints = 0
    if (quantity == 1) {
        if (name === "Ira D") {
            currentPoints = 3;
        } else {
            currentPoints = 4;
        }
    } else if (quantity == 2) {
        if (name === "Ira D") {
            currentPoints = 6;
        } else {
            currentPoints = 7;
        }
    }else {
        if (name === "Ira D") {
            currentPoints = (6 + (2*(quantity-2)));

        } else {
            currentPoints = (7 + (2*(quantity-2)));
        }
    }
    if (p2 == "Ira D"){
        currentPoints += quantity;
    }
    return currentPoints;
    }




const playerNames = [
    "Alex G", "Amy L", "Andrew H", "Brad J", "Brandon Y", "Chris B",
    "David F", "David G", "Derek J", "Eric D", "Eddie H", "Eric P",
    "Ira D", "Jana C", "Jessy R", "Jodi H", "Jon N", "John R",
    "Katherine F", "Mikey B", "Roxy N", "Scott U", "Sid S", "Steve M", "Josh Z", "Nelson C", 
    "Aaron F", "Kevin H", "Del C", "Ryan B", "Graham M", "Hans E", "JJ T", "Scott B", "Justin T"
];

const playerList = playerNames.map(name => new Person(name, [], 0, 0));


const playerMap = {};
playerList.forEach(player => {
    playerMap[player.name] = player;
});





// Replace with your actual Google Sheet ID
        const SHEET_ID = '1iPldTp6W5fHxeq0Nucc0a6Ljra1GZYVz5kMESXHz_rU';
        const csvUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQrbbLSevXn0VUn6LTXuIQxf3J3cHxCaIpTPMCU7l9RQ9IlMgULTEdwJv_xAdSgCrD4mM1MdRfYcNcy/pub?output=csv`;

        async function fetchSheetData() {
            try {
                const response = await fetch(csvUrl);
                const csvText = await response.text();
                getData(csvText);
            } catch (error) {
                document.getElementById('data-container').innerText = 'Error loading data.';
            }
        }


        ArrayList<Game> gameList = new ArrayList<>();

        function getData(csvText) {
            
            // Simple logic to parse CSV lines into an HTML list
            const rows = csvText.trim().split('\n');
            //add a header column
            const headers = rows[0].split(',');
            const people = [];

            for (let i=1, i < rows.length; i++) {
                const column = rows[i].split(',')
                String date = column[0];
                String player1 = column[1];
                String player2 = column[2];
                String type = column[3];
                int quantity = column[4];

                Game gameFromSheet = new Game(player1, player2, type, quantity);
                gameList.add(gameFromSheet);
                
                
            
            let html = '';
            gameList.forEach(game => {
                html += game.person1;
            });
            document.getElementById('data-container').innerHTML = html;
        }

        fetchSheetData();

