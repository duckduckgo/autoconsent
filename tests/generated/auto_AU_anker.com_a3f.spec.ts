import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_anker.com_a3f', ['https://www.anker.com/collections/power-banks'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
