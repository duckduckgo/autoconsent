import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mueller-spring.ch_2r5', ['https://www.mueller-spring.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
