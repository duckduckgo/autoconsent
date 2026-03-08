import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_berwickshoes.com_rtg', ['https://berwickshoes.com/gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
