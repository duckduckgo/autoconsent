import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_objectifgard.com_625', ['https://www.objectifgard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
