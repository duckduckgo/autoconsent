import generateCMPTests from '../playwright/runner';

// In the US these sites only render an empty #sd-cmp container
generateCMPTests('Sirdata', ['https://www.comment-economiser.fr/', 'https://gizmodo.com/', 'https://kotaku.com/'], {
    skipRegions: ['US'],
});
generateCMPTests('Sirdata', ['https://www.ibtimes.co.uk/', 'https://www.medicaldaily.com/']);
