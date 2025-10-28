import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bcuhb.nhs.wales_ijm', ['https://bcuhb.nhs.wales/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
