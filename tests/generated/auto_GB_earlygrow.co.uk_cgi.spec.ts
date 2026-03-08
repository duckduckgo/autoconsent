import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_earlygrow.co.uk_cgi', ['https://earlygrow.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
