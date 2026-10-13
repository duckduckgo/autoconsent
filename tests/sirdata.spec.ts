import generateCMPTests from '../playwright/runner';

generateCMPTests('Sirdata', ['https://www.comment-economiser.fr/', 'https://gizmodo.com/', 'https://upway.de/'], {
    skipRegions: ['US'],
});

generateCMPTests('Sirdata', ['https://www.medicaldaily.com/'], {
    onlyRegions: ['US'],
});
