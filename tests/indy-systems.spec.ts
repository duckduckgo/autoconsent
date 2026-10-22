import generateCMPTests from '../playwright/runner';

generateCMPTests('indy-systems', [
    'https://home.caribbeancinemas.com/home?primary=true',
    'https://www.gtcmovies.com/home',
    'https://www.cwtheaters.com/home',
    'https://www.esquiretheatre.com/home',
]);
