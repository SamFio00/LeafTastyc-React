export const getCache = (key, maxAge) => {
    const cached = localStorage.getItem(key);

    if (!cached) return null;

    const parsed = JSON.parse(cached || '{}');

    const isExpired = Date.now() - parsed.timestamp > maxAge;

    if (isExpired) {
        localStorage.removeItem(key);
        return null;
    }

    return parsed.data;
};

export const setCache = (key, data) => {
    localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};