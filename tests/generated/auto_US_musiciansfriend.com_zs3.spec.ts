import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_musiciansfriend.com_zs3', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
