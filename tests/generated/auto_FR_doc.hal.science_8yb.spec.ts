import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_doc.hal.science_8yb', ['https://doc.hal.science/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
