import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hautegaronnetourisme.com_k9d', ['https://www.hautegaronnetourisme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
