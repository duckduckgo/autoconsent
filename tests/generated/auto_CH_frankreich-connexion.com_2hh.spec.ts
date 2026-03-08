import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frankreich-connexion.com_2hh', ['https://frankreich-connexion.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
