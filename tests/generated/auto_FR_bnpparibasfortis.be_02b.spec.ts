import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bnpparibasfortis.be_02b', ['https://www.bnpparibasfortis.be/en/public/individuals'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
