export interface MovieContentProps {
    type?: string,
    genres: {
        id: number;
        name: string;
    }[],
    overview?: string
    release_date?: string,
    runtime?: number
    vote_average?: number
    tagline?: string
}