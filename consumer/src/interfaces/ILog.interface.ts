export interface ILogInterface {
  status: number;
  request: {
    body: { [key: string]: string };
    headers: { [key: string]: string }[];
    url: string;
    method: 'POST' | 'GET' | 'PATCH' | 'UPDATE' | 'DESTROY';
  };
  responseTime?: number;
  response: { [key: string]: string };
  user_id?: number;
}
