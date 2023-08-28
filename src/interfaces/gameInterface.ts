import { ScreenshotInterface } from './screenshotInterface';
import { Requirements } from '../interfaces/requirements';

export interface GameInterface {
  id: number;
  title: string;
  release_date: Date;
  publisher: string;
  developer: string;
  genre: string;
  thumbnail: string;
  minimum_system_requirements: Requirements;
  platform: string;
  screenshots: ScreenshotInterface[];
}
