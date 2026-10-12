import generateCMPTests from '../playwright/runner';

generateCMPTests('Sirdata', ['https://www.ibtimes.co.uk/']);
generateCMPTests('Sirdata', ['https://www.comment-economiser.fr/', 'https://epoznan.pl/mobile'], {
    skipRegions: ['US'],
});
