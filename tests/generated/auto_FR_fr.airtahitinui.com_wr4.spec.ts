import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.airtahitinui.com_wr4', ['https://fr.airtahitinui.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
