import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sparkasse.at_7fw', ['https://www.sparkasse.at/sgruppe/privatkunden'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
