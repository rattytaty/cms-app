export const formatDateFromNumber = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-IE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};