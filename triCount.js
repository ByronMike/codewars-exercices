/*À la manière de l’application Tricount, la fonction fairDistribution() doit permettre de calculer une répartition équitable des dépenses entre les utilisateurs.

Créez un algorithme qui calcule combien doit chacun et à qui avec les propriétés :
    “name” pour la personne qui doit payer
    “due” pour le montant à transférer
    “to” pour le nom de la personne pour laquelle le transfert est du
Stockez ce tableau de résultat dans la variable balanceArray.
*/


function fairDistribution(data) {
    // Calculate the total sum of amounts
    const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

    // Calculate the average
    const average = totalAmount / data.length;

    // Calculate the due and assign 'to' property for each item
    data.forEach(item => {
        item.due = average - item.amount;
        item.to = ''; // Initialize 'to' property
    });

    // Distribute dues to each other
    for (const item of data) {
        const matchingItem = data.find(e => e.due === -item.due);
        if (matchingItem) {
            item.to = matchingItem.name;
        }
    }

    // Filter items with positive due
    const resultArray = data.filter(item => item.due > 0);

    return resultArray;
}


const expenses = [
   { name: 'Julia', amount: 500 },
   { name: 'John', amount: 300 },
   { name: 'Alex', amount: 400 },
   { name: 'Pamela', amount: 200 }
]
console.log(JSON.stringify(fairDistribution(expenses)));
// Expected result:
// [
//     { "name": 'John', "due": 50, "to": 'Alex' },
//     { "name": 'Pamela', "due": 150, "to": 'Julia' }
// ]
