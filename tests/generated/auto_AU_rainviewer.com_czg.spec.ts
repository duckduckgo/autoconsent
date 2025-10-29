import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rainviewer.com_czg', ['https://www.rainviewer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
