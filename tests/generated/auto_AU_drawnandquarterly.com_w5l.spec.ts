import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_drawnandquarterly.com_w5l', ['https://drawnandquarterly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
