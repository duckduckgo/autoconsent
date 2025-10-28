import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_griesser.ch_iyr', ['https://www.griesser.ch/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
