import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisspor.com_y7f', ['https://www.swisspor.com/ch-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
