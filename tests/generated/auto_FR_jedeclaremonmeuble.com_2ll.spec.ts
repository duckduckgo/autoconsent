import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jedeclaremonmeuble.com_2ll', ['https://www.jedeclaremonmeuble.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
