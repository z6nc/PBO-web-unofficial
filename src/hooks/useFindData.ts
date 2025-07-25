
export function useFindData<T>(data: T[], id: string): T | undefined {
    return data.find(item => item.id === id);
}
