import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_disney.fandom.com_854', ['https://disney.fandom.com/wiki/The_Disney_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
