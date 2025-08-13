import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_westermann.de_iwp', ['https://www.westermann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
