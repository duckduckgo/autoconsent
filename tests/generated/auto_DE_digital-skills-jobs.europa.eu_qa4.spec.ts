import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digital-skills-jobs.europa.eu_qa4', ['https://digital-skills-jobs.europa.eu/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
