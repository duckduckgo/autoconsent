import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stanstedexpress.com_3po', ['https://www.stanstedexpress.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
