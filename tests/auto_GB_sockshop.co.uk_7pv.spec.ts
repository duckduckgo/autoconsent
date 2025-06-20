import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_sockshop.co.uk_7pv', ['https://www.sockshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
