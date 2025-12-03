import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_privateaser.com_uco', ['https://www.privateaser.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
