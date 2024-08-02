import { AlbumUrls } from "./AlbumUrls";

export interface Album {
  id: string;
  name: string;
  urls: AlbumUrls;
  thumbnailUrl: string;
}
