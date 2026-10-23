import generateCMPTests from '../playwright/runner';

generateCMPTests('nhs-jobs', ['https://www.jobs.nhs.uk/'], {
    onlyRegions: ['GB'],
});
