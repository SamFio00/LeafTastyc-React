export const getCache = (key, maxAge) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  let parsed;

  try {
    parsed = JSON.parse(cached);
  } catch {
    localStorage.removeItem(key);
    return null;
  }

  if (maxAge && Date.now() - parsed.timestamp > maxAge) {
    localStorage.removeItem(key);
    return null;
  }

  return parsed.data;
};

export const setCache = (key, data) => {
  localStorage.setItem(
    key,
    JSON.stringify({ data, timestamp: Date.now() })
  );
};