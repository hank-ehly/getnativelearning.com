/**
 * stub-responses
 * get-native.com
 *
 * Created by henryehly on 2017/01/29.
 */

import { APIHandle } from './api-handle';
import { Video } from '../entities/video';
import { Videos } from '../entities/videos';
import { Categories } from '../entities/categories';
import { CuedVideos } from '../entities/cued-videos';

export const STUBResponses = new Map<APIHandle, any>([
    [APIHandle.LOGIN, {}],
    [APIHandle.VIDEO, <Video>{
        'id': 2244994983,
        'cued': true,
        'description': `This is a description about the video. This video is a video and I want to tell you that it is a video as well.
                        If you happen to like videos that this might be a video that you like because you like videos. Of course, if you
                        don\'t like videos then you probably shouldn\'t watch this video.`,
        'speaker': {
            'id': 123456,
            'description': 'Harold Ford is a man from Kansas City, MO. He loves the Chiefs and listens to samba.',
            'name': 'Harold Ford',
            'thumbnail_image_url': '/assets/mock/man-smiling.jpg'
        },
        'subcategory': {
            'id': 123456,
            'name': 'Talking to customers'
        },
        'loop_count': 7156,
        'loop_velocity': 2.4960000000000004,
        'thumbnail_image_url': '',
        'video_url': '/assets/mock/video.mov',
        'related_videos': {
            'records': [
                {
                    'id': 2,
                    'created_at': 'Sat Dec 14 04:35:55 +0000 2015',
                    'length': 68,
                    'loop_count': 25,
                    'subcategory': {
                        'name': 'How to fly a kite'
                    },
                    'speaker': {
                        'name': 'Benjamin Franklin'
                    }
                },
                {
                    'id': 3,
                    'created_at': 'Tue Jun 9 12:00:00 +0000 2015',
                    'length': 80,
                    'loop_count': 1602,
                    'subcategory': {
                        'name': 'Writing a memoir'
                    },
                    'speaker': {
                        'name': 'Thomas Jefferson'
                    }
                }
            ],
            'count': 2
        },
        'liked': false,
        'like_count': 10,
        'length': 68,
        'transcripts': {
            'count': 2,
            'records': [
                {
                    'id': 123,
                    'text': `This is the English transcript. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi
                             atque blanditiis, commodi culpa distinctio ducimus fugit iste mollitia nam neque odit qui quibusdam soluta!
                             Dolor ea placeat soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dicta distinctio
                             temporibus voluptatum. Aliquam expedita fuga impedit ipsanatus.Lorem ipsum dolor sit amet, consectetur
                             adipisicing elit. Corporis distinctio enim error facere fugit harum,ipsum, iure laudan tium, omnis rerum
                             tempore ullam ut. Iste iure!`,
                    'lang': 'en',
                    'collocations': {
                        'count': 1,
                        'records': [
                            {
                                'text': 'This is the text',
                                'description': 'This is the description',
                                "ipa_spelling": 'ˈðɪs ˈɪz ðə ˈtɛkst',
                                'usage_examples': {
                                    'count': 3,
                                    'records': [
                                        {
                                            'text': 'This is the text in which will appear..'
                                        },
                                        {
                                            'text': 'I will tell you that this is the text.'
                                        },
                                        {
                                            'text': 'I don\'t really know if this is the text.'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    'id': 124,
                    'text': `じゅげむじゅげむごこうのすりきれかいじゃりすいぎょのすいぎょうまつうんらいまつふうらいまつくうねるところにすむところやぶらこうじのぶらこ
                             うじぱいぽぱいぽぱいぽのしゅーりんがんしゅーりんがんのぐーりんだいぐーりんだいのぽんぽこぴーのぽんぽこなのちょうきゅうめいのちょうすけ。
                             じゅげむじゅげむごこうのすりきれかいじゃりすいぎょのすいぎょうまつうんらいまつふうらいまつくうねるところにすむところやぶらこうじのぶらこ
                             うじぱいぽぱいぽぱいぽのしゅーりんがんしゅーりんがんのぐーりんだいぐーりんだいのぽんぽこぴーのぽんぽこなのちょうきゅうめいの。`,
                    'lang': 'ja',
                    'collocations': {
                        'count': 1,
                        'records': [
                            {
                                'text': 'This is the text',
                                'description': 'This is the description',
                                "ipa_spelling": 'ˈtɛkst ˈtɛkst',
                                'usage_examples': {
                                    'count': 3,
                                    'records': [
                                        {
                                            'text': 'じゅげむじゅげむごこうのすりきれ..'
                                        },
                                        {
                                            'text': 'ぱいぽぱいぽぱいぽ'
                                        },
                                        {
                                            'text': 'しゅーりんがんしゅーりんがんのぐーりんだいぐーりんだい'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }],
    [APIHandle.VIDEOS, <Videos>{
        'count': 5,
        'records': [
            {
                'created_at': 'Sat Dec 14 04:35:55 +0000 2015',
                'id': 55,
                'speaker': {
                    'name': 'Harold Ford'
                },
                'subcategory': {
                    'name': 'Talking to customers'
                },
                'loop_count': 7156,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 68
            },
            {
                'created_at': 'Wed Jan 11 04:35:55 +0000 2017',
                'id': 56,
                'speaker': {
                    'name': 'Benjamin Franklin'
                },
                'subcategory': {
                    'name': 'How to change a light-bulb'
                },
                'loop_count': 1011,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 73
            },
            {
                'created_at': 'Tue Aug 9 04:35:55 +0000 2016',
                'id': 63,
                'speaker': {
                    'name': 'Jesse James'
                },
                'subcategory': {
                    'name': 'Robbing a bank'
                },
                'loop_count': 9941,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 45
            },
            {
                'created_at': 'Tue Mar 14 04:35:55 +0000 2017',
                'id': 84,
                'speaker': {
                    'name': 'Aretha Franklin'
                },
                'subcategory': {
                    'name': 'American Singers'
                },
                'loop_count': 10503,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 122
            },
            {
                'created_at': 'Thu Jan 12 04:35:55 +0000 2017',
                'id': 109,
                'speaker': {
                    'name': 'Britney Spears'
                },
                'subcategory': {
                    'name': 'High-School Troubles'
                },
                'loop_count': 3,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 89
            },
            {
                'created_at': 'Thu Jan 12 04:35:55 +0000 2017',
                'id': 110,
                'speaker': {
                    'name': 'Santa Claus'
                },
                'subcategory': {
                    'name': 'Efficient Elves'
                },
                'loop_count': 900,
                'loop_velocity': 5.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 89
            }
        ]
    }],
    [APIHandle.CATEGORIES, <Categories>{
        'records': [
            {
                'id': 1,
                'name': 'Business',
                'subcategories': {
                    'records': [
                        {
                            'id': 1,
                            'name': 'Meeting Preparation'
                        },
                        {
                            'id': 2,
                            'name': 'Business Cards'
                        },
                        {
                            'id': 3,
                            'name': 'Greeting Co-Workers'
                        }
                    ],
                    'count': 3
                }
            },
            {
                'id': 2,
                'name': 'Holidays',
                'subcategories': {
                    'records': [
                        {
                            'id': 4,
                            'name': 'Holding Hands'
                        },
                        {
                            'id': 5,
                            'name': 'Meeting the Parents'
                        }
                    ],
                    'count': 2
                }
            },
            {
                'id': 3,
                'name': 'Travel',
                'subcategories': {
                    'records': [
                        {
                            'id': 6,
                            'name': 'Subcategory 1'
                        },
                        {
                            'id': 7,
                            'name': 'Subcategory 2'
                        },
                        {
                            'id': 8,
                            'name': 'Subcategory 3'
                        },
                        {
                            'id': 9,
                            'name': 'Subcategory 4'
                        },
                        {
                            'id': 10,
                            'name': 'Subcategory 5'
                        }
                    ],
                    'count': 5
                }
            },
            {
                'id': 4,
                'name': 'School',
                'subcategories': {
                    'records': [
                        {
                            'id': 11,
                            'name': 'First Day'
                        },
                        {
                            'id': 12,
                            'name': 'Making Friends'
                        }
                    ],
                    'count': 2
                }
            },
            {
                'id': 5,
                'name': 'Transportation',
                'subcategories': {
                    'records': [
                        {
                            'id': 13,
                            'name': 'Taking the Train'
                        },
                        {
                            'id': 14,
                            'name': 'Riding Horses'
                        },
                        {
                            'id': 15,
                            'name': 'Bus Passes'
                        },
                        {
                            'id': 16,
                            'name': 'Taking Long Road Trips'
                        }
                    ],
                    'count': 4
                }
            }
        ],
        'count': 5
    }],
    [APIHandle.CUED_VIDEOS, <CuedVideos>{
        'count': 4,
        'records': [
            {
                'created_at': 'Sat Dec 14 04:35:55 +0000 2015',
                'id': 1,
                'speaker': {
                    'name': 'Harold Ford'
                },
                'subcategory': {
                    'name': 'Talking to customers'
                },
                'loop_count': 7156,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 68
            },
            {
                'created_at': 'Wed Jan 11 04:35:55 +0000 2017',
                'id': 2,
                'speaker': {
                    'name': 'Benjamin Franklin'
                },
                'subcategory': {
                    'name': 'How to change a light-bulb'
                },
                'loop_count': 1011,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 73
            },
            {
                'created_at': 'Tue Aug 9 04:35:55 +0000 2016',
                'id': 3,
                'speaker': {
                    'name': 'Jesse James'
                },
                'subcategory': {
                    'name': 'Robbing a bank'
                },
                'loop_count': 9941,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 45
            },
            {
                'created_at': 'Tue Mar 14 04:35:55 +0000 2017',
                'id': 4,
                'speaker': {
                    'name': 'Aretha Franklin'
                },
                'subcategory': {
                    'name': 'American Singers'
                },
                'loop_count': 10503,
                'loop_velocity': 2.4960000000000004,
                'thumbnail_image_url': '/assets/mock/man-smiling.jpg',
                'video_url': '/assets/mock/video.mov',
                'length': 122
            }
        ]
    }],
    [APIHandle.STUDY_STATS, <any>{
        'lang': 'en',
        'consecutive_days': 12,
        'total_study_sessions': 45,
        'longest_consecutive_days': 15,
        'maximum_words': 502,
        'maximum_wpm': 52
    }]
]);
