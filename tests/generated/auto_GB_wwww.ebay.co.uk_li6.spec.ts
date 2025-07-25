import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wwww.ebay.co.uk_li6', ['https://wwww.ebay.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
