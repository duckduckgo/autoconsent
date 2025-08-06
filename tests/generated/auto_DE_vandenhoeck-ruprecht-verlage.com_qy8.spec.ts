import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vandenhoeck-ruprecht-verlage.com_qy8', ['https://www.vandenhoeck-ruprecht-verlage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
