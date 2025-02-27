
const { getEleveById, getNotesByEleve } = require("../Models/eleveModel");

test("Récupération d'un élève existant", async () => {
    const idEleve = 1; 
    const data = await getEleveById(idEleve);

    expect(data).toHaveProperty("id_eleve");
    expect(data).toHaveProperty("id_classe");
    expect(data).toHaveProperty("id_utilisateur");
});

test("Récupération des notes d'un élève", async () => {
    const idEleve = 1;
    const data = await getNotesByEleve(idEleve);

    expect(Array.isArray(data)).toBe(true);
    if (data.length > 0) {
        expect(data[0]).toHaveProperty("id_note_");
        expect(data[0]).toHaveProperty("valeur");
    }
});

