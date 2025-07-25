import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spiele-offensive.de_vuo', ['https://www.spiele-offensive.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
