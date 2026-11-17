import generateCMPTests from '../playwright/runner';

generateCMPTests('pornhub.com', ['https://pornhub.com/', 'https://fr.pornhub.com/', 'https://de.pornhub.org/'], {
    expectedRuns: 2,
});
