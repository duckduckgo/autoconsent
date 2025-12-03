import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_provenceguide.com_xh6', ['https://www.provenceguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
