import generateCMPTests from '../playwright/runner';

generateCMPTests('appconsent', ['https://www.sportsmole.co.uk/', 'https://www.meteociel.fr/', 'https://www.maxifoot.fr/'], {
    skipRegions: ['NA'],
});
