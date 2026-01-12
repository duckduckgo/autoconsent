import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_escapefromtarkov.fandom.com_3mi', ['https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
