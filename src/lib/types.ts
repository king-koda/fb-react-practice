export type Story = {
  previewImage: string;
  videoURL: string;
  profileIconURL: string;
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
