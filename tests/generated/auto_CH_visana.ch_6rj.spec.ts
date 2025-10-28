import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_visana.ch_6rj', ['https://www.visana.ch/privatpersonen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
