import generateCMPTests from '../playwright/runner';

generateCMPTests('ford-dse', ['https://www.ford.it/', 'https://www.ford.de/', 'https://www.ford.co.uk/', 'https://www.ford.fr/']);
