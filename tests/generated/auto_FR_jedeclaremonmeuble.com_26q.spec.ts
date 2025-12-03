import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jedeclaremonmeuble.com_26q', ['https://www.jedeclaremonmeuble.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
