import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_futureshop.co.uk_1z5', ['https://www.futureshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
