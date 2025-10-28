import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_avg.com_y6q', ['https://www.avg.com/en-au/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
