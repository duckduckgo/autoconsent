import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bestpracticesoftware.com_wqm', ['https://bestpracticesoftware.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
