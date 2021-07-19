import axios from "axios";

class SeriesService{
    getAllSeries(){
        return axios.get("http://localhost:8080/series/getALL");
    }

    addSeries(series){
        return axios.post("http://localhost:8080/series/add", series);
    }

    updateCategory(iD,category){
        return axios.post("http://localhost:8080/category/update/" + iD, category);
    }

    getSeriesByCategory(category){
        return axios.get("http://localhost:8080/series/getByCategory/" + category);
    }
}

export default SeriesService;
