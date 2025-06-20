import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_discountdragon.co.uk_0', ['https://discountdragon.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
