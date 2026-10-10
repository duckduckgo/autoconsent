import generateCMPTests from '../playwright/runner';

generateCMPTests('tk-aerztefuehrer.de', ['https://www.tk-aerztefuehrer.de/TK/Suche_SN/index.js?a=FS1'], {
    // the site reloads the page after saving the selection
    testSelfTest: false,
});
