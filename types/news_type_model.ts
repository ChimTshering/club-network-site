export type News = {
  archive_at: string | null;
  created_at: string;
  created_by: number;
  group_ref: string[];
  group_ref_ids: string[];
  localized_news_attributes: {
    title: string;
    content: string;
    locale: string;
  }[];
  privacy_setting_attributes: {
    id: number;
    uuids: string[];
    name: string;
    news_id: number;
    created_at: string;
    updated_at: string;
  };
  publish_at: string;
  ref_id: string;
  show_in_feed: boolean;
  status: string;
  tags: string[];
  top_news: boolean;
  updated_at: string;
  updated_by: number | null;
  uuid: string;
  visibility: string;
  created_at_in_words: string;
  current_locale_news_attributes: {
    _id?:{$oid:string}
    content: string;
    created_at: string;
    document_urls: string[];
    locale: string;
    news_id: number;
    photo_urls: {
      default: boolean;
      asset_uid: string;
      url: {
        original_url: string;
        medium: string;
        large: string;
        small: string;
      };
    }[];
    ref_id: string;
    tags: string[];
    title: string;
    updated_at: string;
  };
};
