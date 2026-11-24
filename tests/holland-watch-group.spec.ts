import generateCMPTests from '../playwright/runner';

generateCMPTests('holland-watch-group', [
    'https://www.watch.co.uk/',
    'https://www.horloge.nl/',
    'https://www.uhr.com/',
    'https://www.mastersintime.com/',
]);
