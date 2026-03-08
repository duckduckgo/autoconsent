import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_denkmalpflege.lvr.de_1b8', ['https://denkmalpflege.lvr.de/de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
