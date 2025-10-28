import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sparkasse.at_e03', ['https://www.sparkasse.at/sgruppe/privatkunden'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
