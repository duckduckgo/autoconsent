import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hamptons.co.uk_ir3', ['https://www.hamptons.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
