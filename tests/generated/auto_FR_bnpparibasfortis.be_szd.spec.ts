import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bnpparibasfortis.be_szd', ['https://www.bnpparibasfortis.be/en/public/individuals'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
