import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_whatprice.co.uk_f10', ['https://www.whatprice.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
