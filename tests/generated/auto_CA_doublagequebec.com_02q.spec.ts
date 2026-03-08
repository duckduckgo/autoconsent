import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_doublagequebec.com_02q', ['https://doublagequebec.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
