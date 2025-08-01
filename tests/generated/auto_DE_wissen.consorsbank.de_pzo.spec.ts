import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wissen.consorsbank.de_pzo', ['https://wissen.consorsbank.de/t5/FinanzCoach/ct-p/Wissen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
