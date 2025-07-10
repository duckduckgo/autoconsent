import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_racerxonline.com_x2v', ['https://racerxonline.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
