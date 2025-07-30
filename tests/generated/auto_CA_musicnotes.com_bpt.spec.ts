import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_musicnotes.com_bpt', ['https://www.musicnotes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
