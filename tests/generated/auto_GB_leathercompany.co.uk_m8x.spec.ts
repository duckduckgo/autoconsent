import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leathercompany.co.uk_m8x', ['https://www.leathercompany.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
