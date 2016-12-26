/**
 * videos-show-id
 * get-native.com
 *
 * Created by henryehly on 2016/12/24.
 */

import { Speaker, Topic, Transcript } from '../index';

/* Todo: Model each API response (in a clean way) */
export class VideosShowId {
    favorited?: boolean;

    /* Todo: Model */
    created_at: string;

    id_str: string;
    id: number;

    speaker: Speaker;

    /* Todo: Model */
    lang?: string;

    favorite_count?: number;

    /* Todo: Model */
    topic: Topic;

    loop_count: number;
    loop_velocity?: number;
    thumbnail_image_url: string;
    video_url: string;

    /* Todo: (See API documentation) */
    has_related_videos: boolean;

    /* Todo: Model */
    likes: any;

    liked: boolean;
    length: number;

    /* Todo: Model */
    category: any;

    /* Todo: Model */
    transcripts: any;

    /* Todo: Model */
    questions: any;

    description: string;
}
