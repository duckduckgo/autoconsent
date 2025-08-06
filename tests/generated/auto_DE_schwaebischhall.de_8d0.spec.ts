import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaebischhall.de_8d0', ['https://www.schwaebischhall.de/de/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
