import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutschland-tour.com_tod', ['https://www.deutschland-tour.com/de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
