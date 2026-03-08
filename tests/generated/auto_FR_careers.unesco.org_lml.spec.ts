import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_careers.unesco.org_lml', ['https://careers.unesco.org/go/All-jobs-openings/784002/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
