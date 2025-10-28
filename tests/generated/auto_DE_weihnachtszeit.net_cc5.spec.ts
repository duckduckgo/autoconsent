import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weihnachtszeit.net_cc5', ['https://www.weihnachtszeit.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
