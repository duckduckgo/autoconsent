import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freilichtmuseum-lindlar.lvr.de_jub', ['https://freilichtmuseum-lindlar.lvr.de/de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
