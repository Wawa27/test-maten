const GAMEMASTERS = [
    {id: 1, name: 'John', trained_rooms: [2, 3, 5]},
    {id: 2, name: 'Alice', trained_rooms: [4, 10]},
    {id: 3, name: 'David', trained_rooms: [5]},
    {id: 4, name: 'Emily', trained_rooms: [8, 6, 2, 7]},
    {id: 5, name: 'Michael', trained_rooms: [9, 1, 4, 3, 11, 8, 6, 12]},
    {id: 6, name: 'Sophia', trained_rooms: [7, 10]},
    {id: 7, name: 'Daniel', trained_rooms: [8]},
    {id: 8, name: 'Olivia', trained_rooms: [3, 9]},
    {id: 9, name: 'Matthew', trained_rooms: [2, 6, 1, 7, 3, 4]},
    {id: 10, name: 'Emma', trained_rooms: [5, 4]},
    {id: 11, name: 'James', trained_rooms: [11, 6]},
    {id: 12, name: 'Isabella', trained_rooms: [7, 4, 12]},
    {id: 13, name: 'William', trained_rooms: [11, 12]},
    {id: 14, name: 'Ava', trained_rooms: [9, 11, 10]},
    {id: 15, name: 'Benjamin', trained_rooms: [8, 4]},
    {id: 16, name: 'Mia', trained_rooms: [1, 3, 7, 5, 8]},
    {id: 17, name: 'Ethan', trained_rooms: [4, 2]},
    {id: 18, name: 'Charlotte', trained_rooms: [10]},
    {id: 19, name: 'Alexandre', trained_rooms: [9, 2, 8]},
    {id: 20, name: 'Harper', trained_rooms: [1, 12]}
];

const ROOMS = [
    {id: 1, name: "Le Braquage à la française"},
    {id: 2, name: "Le Braquage de casino"},
    {id: 3, name: "L'Enlèvement"},
    {id: 4, name: "Le Métro"},
    {id: 5, name: "Les Catacombes"},
    {id: 6, name: "Assassin's Creed"},
    {id: 7, name: "L'Avion"},
    {id: 8, name: "La Mission spatiale"},
    {id: 9, name: "Le Tremblement de terre"},
    {id: 10, name: "Le Cinéma hanté"},
    {id: 11, name: "Le Farwest"},
    {id: 12, name: "Mission secrète"}
]

// Tirage aléatoire des Game Masters
const random_gamemaster_array = size => GAMEMASTERS.sort(() => Math.random() - 0.5).slice(0, size)

const assignGameMastersToRooms = () => {
    const gamemasters = random_gamemaster_array(ROOMS.length);

    // On garde en mémoire les game masters déjà attribué à une salle
    const assignedGameMasters = new Set();

    return ROOMS.map(room => {
        // On cherche un gamemaster entrainé qui n'est pas déjà attribué
        const chosenGamemaster = gamemasters.find(gameMaster =>
            gameMaster.trained_rooms.includes(room.id) &&
            !assignedGameMasters.has(gameMaster)
        );

        if (chosenGamemaster) {
            assignedGameMasters.add(chosenGamemaster);
            return { room: room.name, gamemaster: chosenGamemaster.name };
        } else {
            throw new Error("Attribution des gamemasters impossible");
        }
    });
}

/**
 * Implémentation naive de l'algorithme, on assigne les gamemasters selon l'ordre dans le tableau aléatoire des gamemasters
 */
const main = () => {
    console.log(assignGameMastersToRooms());
}

main()
