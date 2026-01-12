import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sealskinz.com_7fh', ['https://www.sealskinz.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
