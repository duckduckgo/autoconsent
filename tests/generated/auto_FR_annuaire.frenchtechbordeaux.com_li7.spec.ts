import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annuaire.frenchtechbordeaux.com_li7', ['https://annuaire.frenchtechbordeaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
