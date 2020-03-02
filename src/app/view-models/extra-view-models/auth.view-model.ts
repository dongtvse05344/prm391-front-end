export class TokenVM {
  // tslint:disable-next-line:variable-name
  public access_token: string;
  // tslint:disable-next-line:variable-name
  public expires_in: string;
  public fullname: string;
  public roles: string[];
}

export class UserTokenVM {
  FullName: string;
  Email: string;
  HomeAddress: string;
  CompanyAddress: string;

}
