export const YOUTUBE_VIDEO_LIST_BASE_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN";

export const YOUTUBE_POPULAR_VIDEO_LIST =
    YOUTUBE_VIDEO_LIST_BASE_URL + "&chart=mostPopular&maxResults=50&key=";
