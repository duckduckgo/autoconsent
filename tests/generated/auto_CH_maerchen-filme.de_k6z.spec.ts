import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maerchen-filme.de_k6z', ['http://www.maerchen-filme.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
