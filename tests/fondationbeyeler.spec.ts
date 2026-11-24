import generateCMPTests from '../playwright/runner';

generateCMPTests('fondationbeyeler', ['https://www.fondationbeyeler.ch/startseite'], { testOptIn: false });
