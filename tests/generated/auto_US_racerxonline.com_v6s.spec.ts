import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_racerxonline.com_v6s', ['https://racerxonline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
