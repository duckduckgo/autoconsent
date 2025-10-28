import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_techfinitive.com_8be', ['https://www.techfinitive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
