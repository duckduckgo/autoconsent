import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_musee-orsay.fr_ito', ['https://www.musee-orsay.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
