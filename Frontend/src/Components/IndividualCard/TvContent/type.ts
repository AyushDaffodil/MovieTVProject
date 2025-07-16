export interface TvContentProps {
    type?: string | null
    status?: string
    genres?: {
        name: string;
    }[]
    overview: string
    episode_run_time?: number[]
    season_number?: number
    first_air_date?: string
    last_air_date?: string
    seasons?: {
        episode_count?: number
    }[]
    vote_average?: number
    tagline?: string
}