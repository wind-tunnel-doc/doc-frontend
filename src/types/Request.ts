export interface Request {
  username: string;
  password: string;
  confirmPassword?: string;
  nickName: string;
  phone: string;
  sex: string;
  avatar?: string | null;
}