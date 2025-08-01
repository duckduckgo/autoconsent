import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_orkney2025.com_okf', ['https://www.orkney2025.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
