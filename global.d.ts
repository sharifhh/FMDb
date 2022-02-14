declare interface Title {
  id: string;
  name: string;
  poster: string;
}

declare interface TitleDetails extends Title {
  description: string;
  rating: string;
}
