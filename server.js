require("dotenv").config(); // Charge les variables d'environnement
const express = require("express");
const cors = require("cors");

const eleveRoutes = require("./routes/eleveRoutes"); 
const devoirRoutes = require("./routes/devoirRoutes"); 
const utilisateurRoutes = require("./routes/utilisateurRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Définition des routes
app.use("/api/eleves", eleveRoutes);
app.use("/api/devoir", devoirRoutes);
app.use("/api/utilisateur", utilisateurRoutes);

const PORT = process.env.PORT || 5000;
const SERVER_IP = process.env.SERVER_IP || "localhost";

// **Démarrer le serveur SEULEMENT si ce n'est pas un test**
let server;
if (process.env.NODE_ENV !== "test") {
    server = app.listen(PORT, () => {
        console.log(`🚀 Serveur en écoute sur http://${SERVER_IP}:${PORT}`);
    });
}

// **Exporter `app` et `server` pour permettre à Jest de fermer le serveur**
module.exports = { app, server };
