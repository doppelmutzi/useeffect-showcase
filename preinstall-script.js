/**
 * yarn als package manager nicht erlauben.
 */
if (process.env.npm_execpath.indexOf("npm") === -1) {
  console.error(
    "Wir verwenden npm in diesem Projekt zur Installation von dependencies!"
  );
  console.error("Folgendes bitte ausführen: $ npm i");
  process.exit(1);
}
