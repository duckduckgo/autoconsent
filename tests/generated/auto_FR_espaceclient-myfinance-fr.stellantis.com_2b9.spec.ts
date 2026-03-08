import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espaceclient-myfinance-fr.stellantis.com_2b9', ['https://espaceclient-myfinance-fr.stellantis.com/epw02Web/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
