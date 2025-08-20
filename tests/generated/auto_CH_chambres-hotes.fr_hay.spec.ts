import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chambres-hotes.fr_hay', ['https://www.chambres-hotes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
