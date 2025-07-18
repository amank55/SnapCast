export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/jsm--snapcast",
  CDN_URL: "https://jsm--snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-126d1b47-864.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "SnapChat Message – 30 June 2025",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Product Demo Walkthrough",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-04-15"),
    userImg: "/assets/images/jessica.png",
    username: "Jessica",
    views: 32,
    visibility: "private",
    duration: 198,
  },
  {
    id: "3",
    title: "Team Meeting Highlights",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-03-20"),
    userImg: "/assets/images/alex.png",
    username: "Alex",
    views: 21,
    visibility: "public",
    duration: 142,
  },
  {
    id: "4",
    title: "UI Design Review",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-02-10"),
    userImg: "/assets/images/lisa.png",
    username: "Lisa",
    views: 17,
    visibility: "private",
    duration: 210,
  },
  {
    id: "5",
    title: "Marketing Strategy Call",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-01-25"),
    userImg: "/assets/images/david.png",
    username: "David",
    views: 45,
    visibility: "public",
    duration: 134,
  },
  {
    id: "6",
    title: "Feature Launch Announcement",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2024-12-30"),
    userImg: "/assets/images/emily.png",
    username: "Emily",
    views: 28,
    visibility: "public",
    duration: 188,
  },
  {
    id: "7",
    title: "Customer Feedback Session",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2024-11-18"),
    userImg: "/assets/images/michael.png",
    username: "Michael",
    views: 12,
    visibility: "private",
    duration: 120,
  },
  {
    id: "8",
    title: "Year-End Recap",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2024-10-05"),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 53,
    visibility: "public",
    duration: 160,
  },
];