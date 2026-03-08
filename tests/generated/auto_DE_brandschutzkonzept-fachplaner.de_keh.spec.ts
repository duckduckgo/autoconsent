import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brandschutzkonzept-fachplaner.de_keh', ['https://brandschutzkonzept-fachplaner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
