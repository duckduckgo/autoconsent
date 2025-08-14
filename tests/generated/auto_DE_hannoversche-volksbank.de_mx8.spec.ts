import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hannoversche-volksbank.de_mx8', ['https://www.hannoversche-volksbank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
