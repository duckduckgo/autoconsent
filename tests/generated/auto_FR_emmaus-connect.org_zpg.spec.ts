import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_emmaus-connect.org_zpg', ['https://emmaus-connect.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
