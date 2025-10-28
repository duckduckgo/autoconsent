import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_musiciansfriend.com_7rh', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
