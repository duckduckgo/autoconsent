import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_benq.eu_1mv', ['https://www.benq.eu/de-ch/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
