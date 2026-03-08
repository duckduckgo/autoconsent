import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.bachem.com_h47', ['https://careers.bachem.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
