import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cavuhb.nhs.wales_g3i', ['https://cavuhb.nhs.wales/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
