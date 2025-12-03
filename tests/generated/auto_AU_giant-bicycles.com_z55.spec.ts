import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_giant-bicycles.com_z55', ['https://www.giant-bicycles.com/global'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
