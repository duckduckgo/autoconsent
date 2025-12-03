import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chilternseeds.co.uk_0', ['https://www.chilternseeds.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
