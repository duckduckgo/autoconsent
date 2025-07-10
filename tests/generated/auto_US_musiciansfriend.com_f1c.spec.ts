import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_musiciansfriend.com_f1c', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
