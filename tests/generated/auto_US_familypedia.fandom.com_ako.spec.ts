import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_familypedia.fandom.com_ako', ['https://familypedia.fandom.com/wiki/Family_History_and_Genealogy_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
