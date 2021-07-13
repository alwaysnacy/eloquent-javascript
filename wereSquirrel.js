const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

let journal = []

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    let index = 0;
    for (let entry of journal) {
        index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1
    }
    console.log(event, table)
    return table;
}

function computePhi(table) {
    let dividend = table[1]*table[3] - table[1]*table[2];
    let divisor = Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
    return dividend / divisor;
}

function journalEvents(journal) {
    let events = []
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

let allEvents = journalEvents(journal)
let phiList = {};
for (let event of allEvents) {
    let table = tableFor(event, journal);
    let phi = computePhi(table);
    phiList[event] = phi;
}

console.log(phiList)


