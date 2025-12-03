import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_boerger-motorgeraete.de_io0', ['https://www.boerger-motorgeraete.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
