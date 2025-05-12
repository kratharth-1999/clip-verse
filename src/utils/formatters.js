export const formatViews = (views) => {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + "K";
    }
    return views;
};

export const formatDaysUploaded = (day) => {
    const millisDiff = new Date() - new Date(day);
    const numMinutes = millisDiff / (1000 * 60);
    if (Math.floor(numMinutes) < 60) {
        return Math.floor(numMinutes) + " minutes ago";
    }
    const numHours = numMinutes / 60;
    if (Math.floor(numHours) < 24) {
        return Math.floor(numHours) + " hours ago";
    }
    const numDays = numHours / 24;
    return Math.floor(numDays) + " days ago";
};
