import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chambres-hotes.fr_iis', ['https://www.chambres-hotes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
