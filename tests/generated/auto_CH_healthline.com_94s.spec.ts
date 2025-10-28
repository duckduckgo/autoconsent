import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_healthline.com_94s', ['https://www.healthline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
