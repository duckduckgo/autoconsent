import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_earthshotprize.org_5lm', ['https://earthshotprize.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
