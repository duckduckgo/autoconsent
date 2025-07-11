import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ipswichstar.co.uk_md6', ['https://www.ipswichstar.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
