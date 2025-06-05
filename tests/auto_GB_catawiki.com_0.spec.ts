import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_catawiki.com_0', ['https://www.catawiki.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
