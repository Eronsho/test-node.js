export interface UserDtoattrib {
  id: string;
  email: string;
  full_name: string;

  role: string;
}
export const UserDto = class UserDto {
  id: string;
  email: string;
  full_name: string;
  contract?: number;
  post?: string;
  role: string;
  isActivated: boolean;

  constructor(model: UserDtoattrib) {
    this.email = model.email;
    this.id = model.id;
    this.full_name = model.full_name;
    this.role = model.role;
  }
};
