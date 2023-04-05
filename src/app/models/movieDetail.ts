import { Genre } from "./genre";
import { ProductionCompany } from "./productionCompany";
import { ProductionCountry } from "./productionCountry";
import { SpokenLanguage } from "./spokenLanguage";

export interface MovieDetail {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: object;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}
