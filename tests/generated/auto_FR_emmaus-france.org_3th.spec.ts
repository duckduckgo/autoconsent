import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_emmaus-france.org_3th', ['https://emmaus-france.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
