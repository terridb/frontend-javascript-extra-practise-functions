// We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

/* Opdracht 1 */
// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.
emailadresses.push("m.westerbroek@novi.nl");

// 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
// maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.
function addToMailList(mailList, newMail) {
    return mailList.push(newMail);
}

/* Opdracht 2 */
// 2a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl
emailadresses.includes("n.stuivenberg@novi.nl");
// 2b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
// Als er niets wordt gevonden, returnt de functie null.
function searchEmail(mailList, lastName) {
    for (let i = 0; i < mailList.length; i++) {
        if (mailList[i].includes(lastName)) {
            return mailList[i];
        }
    }
    return null
}

const searchedEmail = searchEmail(emailadresses, "stuivenberg");
console.log(searchedEmail);

/* Opdracht 3 */
// 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
// bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
// Let op: je weet niet hoe lang de lijst is!
emailadresses.splice(emailadresses.length - 1, 0, "t.mellink@novi.nl");
console.log(emailadresses);
// 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.
function addEmailAdress(mailList, mailY, mailZ) {
    const locationMailZ = mailList.indexOf(mailZ);
    mailList.splice(locationMailZ, 0, mailY);
    return mailList;
}

const newMailList = addEmailAdress(emailadresses, "test@novi.nl", "t.mellink@novi.nl");
console.log(newMailList);
/* Opdracht 4 */
// Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie
