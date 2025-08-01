import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_giant-bicycles.com_md0', ['https://www.giant-bicycles.com/global'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
