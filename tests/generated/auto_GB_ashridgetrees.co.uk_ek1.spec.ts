import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ashridgetrees.co.uk_ek1', ['https://www.ashridgetrees.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
