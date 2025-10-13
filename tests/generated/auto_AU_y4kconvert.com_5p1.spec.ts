import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_y4kconvert.com_5p1', ['https://www.y4kconvert.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
