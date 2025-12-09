import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_motorola.com_y91', ['https://www.motorola.com/de/de/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
