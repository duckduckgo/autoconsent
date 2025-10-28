import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_freeads.co.uk_qcs', ['https://www.freeads.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
