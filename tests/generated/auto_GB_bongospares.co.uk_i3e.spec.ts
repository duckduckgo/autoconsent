import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bongospares.co.uk_i3e', ['https://bongospares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
