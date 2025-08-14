import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bouyguestelecom.fr_57b', ['https://www.bouyguestelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
