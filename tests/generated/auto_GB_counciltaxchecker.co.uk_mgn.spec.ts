import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_counciltaxchecker.co.uk_mgn', ['https://counciltaxchecker.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
