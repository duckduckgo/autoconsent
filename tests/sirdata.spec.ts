import generateCMPTests from '../playwright/runner';

// GDPR flavor: "Do not accept" button, or only a close (X) button
generateCMPTests(
    'Sirdata',
    ['https://www.comment-economiser.fr/', 'https://www.futbolfantasy.com/', 'https://kotaku.com/', 'https://upway.de/'],
    {
        skipRegions: ['US'],
    },
);

// US flavor: reject via "Set your choices"
generateCMPTests('Sirdata', ['https://www.medicaldaily.com/', 'https://www.ibtimes.co.uk/'], {
    onlyRegions: ['US'],
});
