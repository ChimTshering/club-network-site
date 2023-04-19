export type Document = {
  name: string;
  size: string;
  src: string;
};
export type FeedPostRequest = {
  actor: {
    image: string;
    name: string;
    uuid: string;
  };
  document_urls?: Document[];
  editable?: boolean;
  hash_tags?: string[];
  image_urls?: string[];
  item?: {
    content: {
      image_urls: string[];
      document_urls: Document[];
      video_urls: string[];
    };
  };
  link_preview?: {};
  reactions?: [];
  text_content?: string;
  video_urls?: string[];
  visibility: string;
};

export type FeedObj = {
  verb: string;
  target: string;
  name_map: { en: string; fr: string; it: string; de: string };
  url: string | null;
  published_at: string | null;
  actor: {
    type: string;
    iri: string;
    uri: string;
    name: string;
    image: string;
    bio: string;
    id: string;
  };
  item: {
    _id: string;
    type: string;
    iri: string;
    uri: string;
    content: {
      accessibility?: {
        bookable: boolean;
        created_at: string | null;
        public: boolean;
        ref_id: number;
        updated_at: string;
        website: boolean;
      };
      amenity_tags?: string[] | [];
      closing_time_attributes?: {
        id: number;
        duration: number;
        duration_type: string;
      };
      id?: number;
      top_news?: boolean;
      publish_at?: string;
      archive_at?: string | null;
      status?: string;
      created_by?: string | number | null;
      description?: string;
      document_urls?: Document[] | [];
      documents_attributes?:{id:number; name:string;path:string;size_in_kb:number} [];
      event_from?: string;
      event_status?:string
      event_to?: string;
      feeded?: boolean;
      group_ref?: string[] | [];
      image_path_large?:string
      image_path_medium?:string
      internal?: boolean;
      join_in?: boolean;
      location?: string;
      option_tags?: string[];
      people_attending?: number;
      photo_gallery_count?: number;
      public_redirect_url?: string;
      ref_id?: string;
      seats_available?: string | number;
      title?: string;
      upcoming_date?: string;
      upcoming_time?: string;
      event_category_name?: string;
      updated_by?: number | null;
      created_at: string;
      updated_at: string | null;
      uuid: string;
      show_in_feed: boolean;
      total_attendees?:number
      tags?: string[];
      visibility: string;
      waiting_list?: boolean;
      time_slot_attributes?: {
        id: number;
        event_id: number;
        from: string;
        to: string;
        created_at: string;
        updated_at: string;
      };
      recurrence_attributes?:{
        id:number
        event_id:number
        recurrence_type:string
        repeated_count:number
        repeats_every:number
        repeats_weekly_on:string[]
        repeats_monthly_on:number
        ends_never:boolean
        ends_on:string | null |number
        ends_after:number | null
        repeats_yearly_on:{}
      }
      image_urls?:string[]
      text_content?:string;
      created_at_in_words?: string;
      localized_news_attributes?: {
        content: string | null;
        created_at: string;
        document_urls: Document[] | [];
        locale: string;
        news_id: number;
        photo_urls:
          | [
              {
                default: boolean;
                asset_uid: string;
                url: {
                  original_url: string;
                  medium: string;
                  large: string;
                  small: string;
                };
              }
            ]
          | [];
        ref_id: string;
        tags: string[];
        title: string;
        updated_at: string;
      }[];
      group_ref_ids?: string[];
    };
  };
  score_meta: {
    _id: string;
    interaction: number;
    relationship: number;
    promotion: number;
    age: number;
  };
  interaction: {
    _id: string;
    likes: number;
    comments: number;
    shares: number;
  };
  updated_at: string;
  created_at: string;
  score: number;
  mentions?:string[] | []
  id: string;
};
