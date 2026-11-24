import generateCMPTests from '../playwright/runner';

// custom first layer that opens the DataGrail preferences panel
generateCMPTests('simplepractice.com', ['https://www.simplepractice.com/']);
