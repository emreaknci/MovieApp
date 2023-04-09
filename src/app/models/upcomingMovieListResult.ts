import { ListResultModel } from "./listResultModel";
import { UpcomingMovieDetail } from "./upcomingMovieDetail";

export interface UpcomingMovieListResult extends ListResultModel<UpcomingMovieDetail>{
    dates?:{
        maximum?:string,
        minimum?:string
    }
}