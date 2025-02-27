module.exports = {
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["./jest.setup.js"], // ✅ Si tu as besoin de fermer les connexions
  testMatch: ["<rootDir>/tests/**/*.test.js"], // ✅ Teste uniquement les fichiers dans `tests/`
};
