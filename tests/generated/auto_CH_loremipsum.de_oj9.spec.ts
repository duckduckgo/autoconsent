import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_loremipsum.de_oj9', ['https://www.loremipsum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
