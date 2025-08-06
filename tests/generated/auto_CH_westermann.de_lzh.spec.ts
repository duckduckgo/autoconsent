import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_westermann.de_lzh', ['https://www.westermann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
