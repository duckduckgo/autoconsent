import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adherent.ircec.net_2cz', ['https://adherent.ircec.net/se-connecter'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
