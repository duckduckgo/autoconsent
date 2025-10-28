import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sbuhb.nhs.wales_4qa', ['https://sbuhb.nhs.wales/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
