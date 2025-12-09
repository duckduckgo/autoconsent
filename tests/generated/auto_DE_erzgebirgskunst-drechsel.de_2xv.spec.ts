import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erzgebirgskunst-drechsel.de_2xv', ['https://www.erzgebirgskunst-drechsel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
