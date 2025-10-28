import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_joybuy.fr_crm', ['https://www.joybuy.fr/error403?referrer=%2F'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
