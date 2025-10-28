import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_empressmills.co.uk_13f', ['https://www.empressmills.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
