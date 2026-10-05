/**
 * Entry point for dist/autoconsent.heuristics-dom.js: exposes heuristic popup and button discovery on a global,
 * so that page-injected scripts (e.g. tracker-radar-collector's scrape script) can reuse it.
 */
import { getButtonData, getPotentialPopups } from './heuristics';

Object.assign(globalThis, { autoconsentHeuristics: { getPotentialPopups, getButtonData } });
