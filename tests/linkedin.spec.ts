import generateCMPTests from '../playwright/runner';

generateCMPTests('linkedin.com', ['https://www.linkedin.com/', 'https://in.linkedin.com/'], {
    skipRegions: ['US'],
});
