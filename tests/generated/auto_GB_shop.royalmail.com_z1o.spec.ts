import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shop.royalmail.com_z1o', ['https://shop.royalmail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
