import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tout-terrain.de_suv', ['https://tout-terrain.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
