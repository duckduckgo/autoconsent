import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theelectricbikeshop.co.uk_hhv', ['https://www.theelectricbikeshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
