export type Movie = {
    id: string;
    imageURL: string;
    title: string;
    summary: string;
    rating: number;
    action?: string;
}

export type SnackBarOptions = {
    open: boolean;
    action: string;
}