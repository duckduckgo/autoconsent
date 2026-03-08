import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_barclayslifeskills.com_yym', ['https://barclayslifeskills.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
