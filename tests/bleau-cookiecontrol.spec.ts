import generateCMPTests from '../playwright/runner';

generateCMPTests('bleau-cookiecontrol', ['https://silkeborg.dk/', 'https://gladsaxe.dk/', 'https://kolding.dk/', 'https://fynbus.dk/']);
