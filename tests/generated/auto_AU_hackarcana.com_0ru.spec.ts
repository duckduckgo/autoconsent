import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hackarcana.com_0ru', ['https://hackarcana.com/article/yet-another-zip-trick'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
