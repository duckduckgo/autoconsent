import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_musicnotes.com_obk', ['https://www.musicnotes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
