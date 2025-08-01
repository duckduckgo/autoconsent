import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_petertyson.co.uk_0', ['https://petertyson.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
