import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_2025.bergenassembly.no_5a4', ['https://2025.bergenassembly.no/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
