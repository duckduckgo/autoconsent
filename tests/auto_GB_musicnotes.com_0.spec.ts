import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_musicnotes.com_0', ['https://www.musicnotes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
