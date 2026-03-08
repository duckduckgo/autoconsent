import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edm-accessories.ford.com_9ky', ['https://edm-accessories.ford.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
