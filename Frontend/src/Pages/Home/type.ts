export interface countProps {
    countFunc: (value: number) => void
}

export interface searchDataProps {
    searchData?: {
        page: number;
        results: {
            adult: boolean;
            backdrop_path: string;
            id: number;
            title: string;
            original_language: string;
            original_title: string;
            overview: string;
            poster_path: string;
            media_type: string;
            genre_ids: number[];
            popularity: number;
            release_date: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
        }[];
        total_pages: number
        total_results: number
    }
    SearchData2?: {
        page: number;
        results: {
            adult: boolean;
            backdrop_path: string;
            id: number;
            title: string;
            original_language: string;
            original_title: string;
            overview: string;
            poster_path: string;
            media_type: string;
            genre_ids: number[];
            popularity: number;
            release_date: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
        }[];
        total_pages: number
        total_results: number
    }
    page?: number
    handlePageLeft?: () => void
    handlePageRight?: () => void
}


export interface searchProps {
    page: number;
    results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
    total_pages: number
    total_results: number
}


export interface OutletProps2 {
    outlet: {
        outletSearchData: searchProps,
        location: number
        page2: number
        handlePageLeft: () => void
        handlePageRight: () => void
    }
}