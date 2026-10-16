import generateCMPTests from '../playwright/runner';

generateCMPTests('openai', ['https://openai.com/', 'https://openai.com/fr-FR/', 'https://openai.com/de-DE/'], {
    skipRegions: ['US'],
});
