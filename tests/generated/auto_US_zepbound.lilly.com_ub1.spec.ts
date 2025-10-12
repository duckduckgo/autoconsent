import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_zepbound.lilly.com_ub1', ['https://zepbound.lilly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
