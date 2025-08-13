import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annuaire-inverse-france.com_4oi', ['https://www.annuaire-inverse-france.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
