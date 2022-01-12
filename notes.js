const notes = [
    {
        id: 1,
        subject: "for...of loops",
        date: "1/12/22",
        feeling: "not very confident yet",
        timeSpent: 30
    },
    {
        id: 2,
        subject: "functions",
        date: "1/12/22",
        feeling: "not very confident yet",
        timeSpent: 60
    }
]

const noteAboutToday = [
    {
    id: 3,
    subject: "array",
    date: "1/12/22",
    feeling: "confident",
    timeSpent: 15
    }
]

notes.push(noteAboutToday)

// for (const note of notes){
//     console.log(`Note ${note.id} 
//     ${note.date}
//     I learned about ${note.subject}
//     I spent ${note.timeSpent} minutes working on it
//     I felt ${note.feeling}.
//     -----------------
//     `)
// }

// const searchTerm = "functions"

// for (const note of notes) {
//     if (note.subject === "functions")
//     console.log(note)
    
// }

const createNote = (note) => {
    note.id = "4"
    notes.push(note)
}

const moreNewerNote = {
    subject: ".push method",
    date: "1/12/22",
    feeling: "semi-confident",
    timeSpent: 15
}

createNote(moreNewerNote)

console.log(moreNewerNote)

