import generateCMPTests from '../playwright/runner';

generateCMPTests('airbnb', ['https://www.airbnb.it/', 'https://www.airbnb.de/', 'https://www.airbnb.co.uk/', 'https://www.airbnb.fr/']);
