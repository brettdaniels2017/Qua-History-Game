# Qua History Game

Play it: https://brettdaniels2017.github.io/Qua-History-Game/

The Last Republic is a playable political drama for a history class. The player is Senator Lucius Valerius in the last years of the Roman Republic, debating Julius Caesar across six crises.

This game is separate from Sandscape. Sandscape lives in `../sandscape` and is not imported here. Run this app from this folder.

```bash
npm install
npm run dev
```

Then open the local address Vite prints (port 5174 unless that port is taken).

```bash
npm test
npm run build
```

`npm test` plays the scoring paths, including all three endings, and checks that Caesar’s later speeches change when earlier choices change.

Cinzel and Cormorant Garamond are bundled under the SIL Open Font License. The license texts are in `src/fonts/`.
