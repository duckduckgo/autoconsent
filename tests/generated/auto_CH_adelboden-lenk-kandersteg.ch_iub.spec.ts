import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_adelboden-lenk-kandersteg.ch_iub', ['https://adelboden-lenk-kandersteg.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
