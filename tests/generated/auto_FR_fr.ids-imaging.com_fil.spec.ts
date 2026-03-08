import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.ids-imaging.com_fil', ['https://fr.ids-imaging.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
