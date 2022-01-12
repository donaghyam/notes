const notes = [
    {
        id: 1,
        subject: "for...of loops",
        date: "1/12/22",
        feeling: "Not very confident yet",
        timeSpent: 30
    },
    {
        id: 2,
        subject: "functions",
        date: "1/12/22",
        feeling: "Not very confident yet",
        timeSpent: 60
    }
]

const noteAboutToday = [
    {
    id: 3,
    subject: "array",
    date: "1/12/22",
    feeling: "Confident",
    timeSpent: 15
    }
]

notes.push(noteAboutToday)

console.log(notes)
