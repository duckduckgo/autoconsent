import generateCMPTests from "../playwright/runner";

generateCMPTests('Sirdata', [
    'https://www.futura-sciences.com/',
    'https://www.comment-economiser.fr/',
], {
    skipRegions: ['US']
});
