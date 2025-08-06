import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_provenceguide.com_yli', ['https://www.provenceguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
