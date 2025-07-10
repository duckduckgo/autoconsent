import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_agrigem.co.uk_z8o', ['https://www.agrigem.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
