import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aquaportail.com_e1k', ['https://www.aquaportail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
