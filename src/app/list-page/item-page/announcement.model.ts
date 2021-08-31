import {User} from "../../authentication/user.model";

export interface Announcement {

  id: number,
 publisher: User,
  read: boolean,
  important: boolean,
  title: string,
  text: string
}
