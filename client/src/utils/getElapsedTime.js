export const getElapsed = timestamp => {
  const providedTime = new Date(timestamp);
  const currentTime = new Date();

  const seconds = Math.floor((currentTime - providedTime) / 1000);

  if (seconds < 60) {
    return seconds + "s ago";
  } else if (seconds < 3600) {
    return Math.floor(seconds / 60) + "m ago";
  } else if (seconds < 86400) {
    return Math.floor(seconds / 3600) + "h ago";
  } else {
    return Math.floor(seconds / 86400) + "d ago";
  }
};
