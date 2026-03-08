import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.autozone.com_pfg', ['https://careers.autozone.com/hcmUI/CandidateExperience/en/sites/CX_1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
