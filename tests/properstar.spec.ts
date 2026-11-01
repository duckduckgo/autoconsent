import generateCMPTests from '../playwright/runner';

generateCMPTests('properstar', ['https://www.properstar.nl/', 'https://www.properstar.de/', 'https://international.immobiliare.it/']);
