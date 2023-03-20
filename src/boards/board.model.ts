export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStaus;
}

export enum BoardStaus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}
