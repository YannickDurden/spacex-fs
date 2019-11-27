import { Rocket } from './rocket';

export interface Launch {
  flight_number: number;
   mission_name: string;
   mission_id: Array<string>;
   upcoming: boolean;
   launch_year: number;
   launch_date_unix: number;
   launch_date_utc: Date;
   launch_date_local: Date;
   is_tentative: boolean;
   tentative_max_precision: string;
   tbd: boolean;
   launch_window: number;
   rocket: Rocket;
   ships: Array<any>;
   telemetry: {
     flight_club: any
   };
   launch_site: LaunchSite;
   launch_success: boolean;
   launch_failure_details: {
            time: number;
            altitude: number;
            reason: string;
   };
   links: Links;
   details: string;
   static_fire_date_utc: Date;
   static_fire_date_unix: string;
   timeline: {
     webcast_liftoff: number;
   };
   crew: any;

}

interface  LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface Links {
  mission_patch: string;
  mission_patch_small: string
  reddit_campaign: any,
  reddit_launch: any;
  reddit_recovery: any;
  reddit_media: any;
  presskit: any;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: Array<string>;
}
