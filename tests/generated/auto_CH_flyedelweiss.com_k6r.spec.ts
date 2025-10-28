import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flyedelweiss.com_k6r', ['https://www.flyedelweiss.com/ch/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
