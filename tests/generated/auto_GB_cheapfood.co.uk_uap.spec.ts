import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cheapfood.co.uk_uap', ['https://cheapfood.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
