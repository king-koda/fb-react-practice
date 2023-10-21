export type StoryType = {
  previewImage: string;
  videoURL: string;
  profileIcon: string;
  profileName: string;
  action: 'watch' | 'create';
  profileId: number;
};

export type PageTypes =
  | 'HOME'
  | 'FRIENDS'
  | 'VIDEOS'
  | 'MARKETPLACE'
  | 'GROUPS';
