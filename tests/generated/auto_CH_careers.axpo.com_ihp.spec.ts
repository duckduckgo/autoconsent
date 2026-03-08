import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.axpo.com_ihp', ['https://careers.axpo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
