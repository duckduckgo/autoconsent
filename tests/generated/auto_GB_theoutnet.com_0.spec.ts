import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theoutnet.com_0', ['https://www.theoutnet.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
