import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_y4kconvert.com_7e8', ['https://www.y4kconvert.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
