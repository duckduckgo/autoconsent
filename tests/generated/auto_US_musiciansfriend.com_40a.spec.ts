import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_musiciansfriend.com_40a', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
