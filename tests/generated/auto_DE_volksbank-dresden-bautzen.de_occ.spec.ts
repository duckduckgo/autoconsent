import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksbank-dresden-bautzen.de_occ', ['https://www.volksbank-dresden-bautzen.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
