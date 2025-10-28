import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_augen-fachwelt.de_2m5', ['https://augen-fachwelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
