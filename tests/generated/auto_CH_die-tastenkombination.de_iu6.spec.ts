import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_die-tastenkombination.de_iu6', ['https://www.die-tastenkombination.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
