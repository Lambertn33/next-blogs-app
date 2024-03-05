export interface BlogData {
  title: string;
  content: string;
}

export interface BlogInterface extends BlogData {
  id: number;
  writer: string;
}
