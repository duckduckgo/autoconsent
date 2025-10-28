import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_live-footballontv.com_euf', ['https://www.live-footballontv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
