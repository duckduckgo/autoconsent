import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_corporate.harpercollins.co.uk_c4c', ['https://corporate.harpercollins.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
