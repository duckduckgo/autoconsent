import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_denbypottery.com_d67', ['https://www.denbypottery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
