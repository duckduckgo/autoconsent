import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_utopiales.org_l41', ['https://www.utopiales.org/en/les-utopiales-international-science-fiction-festival/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
