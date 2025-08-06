import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bouyguestelecom.fr_uue', ['https://www.bouyguestelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
