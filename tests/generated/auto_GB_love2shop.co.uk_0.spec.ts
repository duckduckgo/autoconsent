import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_love2shop.co.uk_0', ['https://www.love2shop.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
