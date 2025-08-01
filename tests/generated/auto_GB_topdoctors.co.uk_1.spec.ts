import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_topdoctors.co.uk_1', ['https://www.topdoctors.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
