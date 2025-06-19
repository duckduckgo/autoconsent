import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_sockshop.co.uk_1ox', ['https://www.sockshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
