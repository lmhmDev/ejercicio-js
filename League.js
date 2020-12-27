function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function generateRandom() {
    return Math.floor(Math.random() * 10);
}


export default class League {
    constructor(name, teams = []) {
        this.name = name;
        this.teams = shuffle(teams);
    }

    start() {
        console.log(`\nCOMIENZA LA LIGA: ${this.name}\n`)
        this.playLeague(this.teams)
    }

    playLeague(teams) {
        const winners = [];
        console.log('COMIENZA LA ELIMINATORIA\n');

        for (let i = 0; i < teams.length; i++) {
            const team1 = teams[i];
            i++;
            const team2 = teams[i];
            const points1 = generateRandom();
            const points2 = generateRandom();
            let winner = '';

            if (points1 > points2) {
                winner = team1;
            } else {
                winner = team2;
            }

            winners.push(winner);

            console.log(`${team1} ${points1} | ${points2} ${team2} => ${winner}`);
        }

        this.playOctavos(winners);
    }

    playOctavos(teams) {
        const winners = [];
        console.log(`\n=================\nCOMIENZAN LOS OCTAVOS DE FINAL\n=================\n`);

        for (let i = 0; i < teams.length; i++) {
            const team1 = teams[i];
            i++;
            const team2 = teams[i];
            const points1 = generateRandom();
            const points2 = generateRandom();
            let winner = '';

            if (points1 > points2) {
                winner = team1;
            } else {
                winner = team2;
            }

            winners.push(winner);

            console.log(`${team1} ${points1} | ${points2} ${team2} => ${winner}`);
        }

        this.playCuartos(winners);
    }

    playCuartos(teams) {
        const winners = [];
        console.log(`\n=================\nCOMIENZAN LOS CUARTOS DE FINAL\n=================\n`);

        for (let i = 0; i < teams.length; i++) {
            const team1 = teams[i];
            i++;
            const team2 = teams[i];
            const points1 = generateRandom();
            const points2 = generateRandom();
            let winner = '';

            if (points1 > points2) {
                winner = team1;
            } else {
                winner = team2;
            }

            winners.push(winner);

            console.log(`${team1} ${points1} | ${points2} ${team2} => ${winner}`);
        }

        this.playSemis(winners);
    }

    playSemis(teams) {
        const winners = [];
        const losers = [];
        console.log(`\n=================\nCOMIENZAN LA SEMIFINAL\n=================\n`);

        for (let i = 0; i < teams.length; i++) {
            const team1 = teams[i];
            i++;
            const team2 = teams[i];
            const points1 = generateRandom();
            const points2 = generateRandom();
            let winner = '';
            let loser = '';

            if (points1 > points2) {
                winner = team1;
                loser = team2;
            } else {
                winner = team2;
                loser = team1;
            }

            winners.push(winner);
            losers.push(loser);

            console.log(`${team1} ${points1} | ${points2} ${team2} => ${winner}`);
        }

        this.playFinal(winners, losers);
    }

    playFinal(finalists, losers) {
        console.log(`\n=================\nCOMIENZA LA FINAL\n=================\n`);
        console.log(`\n------ 3º Y 4º PUESTO ------\n`);
        let team1 = losers[0];
        let team2 = losers[1];
        let points1 = generateRandom();
        let points2 = generateRandom();
        let third = '';
        let fourth = '';

        if (points1 > points2) {
            third = team1;
            fourth = team2;
        } else {
            third = team2;
            fourth = team1;
        }

        console.log(`${team1} ${points1} | ${points2} ${team2} => ${third}`);

        console.log('\n------ 1º Y 2º PUESTO ------\n');


        team1 = finalists[0];
        team2 = finalists[1];
        points1 = generateRandom();
        points2 = generateRandom();
        let first = '';
        let second = '';

        if (points1 > points2) {
            first = team1;
            second = team2;
        } else {
            first = team2;
            second = team1;
        }

        console.log(`${team1} ${points1} | ${points2} ${team2} => ${first}`);


        console.log(`\n1º Puesto: ${first} \n2º Puesto: ${second} \n3º Puesto: ${third} \n4º Puesto: ${fourth}`)

    }
}