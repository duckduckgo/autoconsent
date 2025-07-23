import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newsshopper.co.uk_app', ['https://www.newsshopper.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
