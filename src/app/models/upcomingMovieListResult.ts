import { ListResultModel } from "./listResultModel";
import { UpcomingMovieDetail } from "./upComingMovieDetail";

export interface UpcomingMovieListResult extends ListResultModel<UpcomingMovieDetail>{
    dates?:{
        maximum?:string,
        minimum?:string
    }
}