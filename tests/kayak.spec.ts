import generateCMPTests from '../playwright/runner';

generateCMPTests('kayak', ['https://www.kayak.pt/', 'https://www.kayak.de/', 'https://www.kayak.co.uk/']);
