import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_giant-bicycles.com_nfb', ['https://www.giant-bicycles.com/global'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
