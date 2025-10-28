import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lausanne-sport.ch_r7f', ['https://www.lausanne-sport.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
