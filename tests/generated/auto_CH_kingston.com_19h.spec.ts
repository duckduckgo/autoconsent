import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kingston.com_19h', ['https://www.kingston.com/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
