import generateCMPTests from '../playwright/runner';

generateCMPTests('meteocat', ['https://m.meteo.cat/', 'https://www.meteo.cat/']);
