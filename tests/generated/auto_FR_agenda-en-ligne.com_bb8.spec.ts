import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agenda-en-ligne.com_bb8', ['https://agenda-en-ligne.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
