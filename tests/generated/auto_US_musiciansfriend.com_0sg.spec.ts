import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_musiciansfriend.com_0sg', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
