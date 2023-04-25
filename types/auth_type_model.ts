export type signInRequest = {
email:string;
password:string;
profile_attributes:{
  locale:string
};
remember_me:boolean;
role_id:number;
}

export type signInResponse = {
  active: boolean;
  confirmed: boolean;
  created_at: string;
  email: string;
  first_name: string;
  gender: string | null;
  hide_me: boolean;
  id: number;
  last_name?: string;
  locale: string;
  notification_setting?: {
    notify_new_news: boolean;
    notify_new_event: boolean;
    notify_new_message: boolean;
  };
  phone:number|null;
  photo_path:string;
  ref_id:string;
  role:string;
  updated_at:string;
  uuid:string;
  _id:string;
};
export type authStore= {
  signed_in_user?:signInResponse
}
