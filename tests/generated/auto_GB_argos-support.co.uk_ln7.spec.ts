import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_argos-support.co.uk_ln7', ['https://argos-support.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
