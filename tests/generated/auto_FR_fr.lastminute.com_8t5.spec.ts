import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.lastminute.com_8t5', ['https://www.fr.lastminute.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
