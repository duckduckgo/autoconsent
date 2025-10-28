import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francaisfacile.com_xrd', ['https://www.francaisfacile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
