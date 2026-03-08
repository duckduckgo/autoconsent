import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmc-switzerland.com_p74', ['https://bmc-switzerland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
