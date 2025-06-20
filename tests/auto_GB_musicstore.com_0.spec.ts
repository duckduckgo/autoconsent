import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_musicstore.com_0', ['https://www.musicstore.com/en_OE/EUR'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
