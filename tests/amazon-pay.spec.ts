import generateCMPTests from '../playwright/runner';

generateCMPTests('amazon-pay', ['https://pay.amazon.co.jp/', 'https://pay.amazon.co.uk/', 'https://pay.amazon.de/']);
