import generateCMPTests from '../playwright/runner';

generateCMPTests('properstar', ['https://www.properstar.de/', 'https://www.properstar.co.uk/', 'https://www.properstar.fr/']);
