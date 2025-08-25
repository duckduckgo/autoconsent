import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_co-operativebank.co.uk_vgv', ['https://www.co-operativebank.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
