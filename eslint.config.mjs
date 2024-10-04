import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.jest, // Añadir las globals de Jest
      },
    },
    plugins: {
      jest: pluginJest, // Añadir el plugin de Jest
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules, // Añadir las reglas recomendadas de Jest
    },
  },
];

// import globals from "globals";
// import pluginJs from "@eslint/js";


// export default [
//   {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];