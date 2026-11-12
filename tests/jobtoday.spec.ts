import generateCMPTests from '../playwright/runner';

generateCMPTests('jobtoday', ['https://jobtoday.com/'], {
    skipRegions: ['US', 'NL'],
});
