import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sanctuary-bathrooms.co.uk_0', ['https://www.sanctuary-bathrooms.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
