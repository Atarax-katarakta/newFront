import axios from "axios";


export  class TownService {
    static async getAll(){
        return axios({
            method: 'get',
            url: ''
        }).then((response) => {
            console.log()
            return response.data
        })
    }
}

export  class UniversityService {
    static async getAll(){
        return axios({
            method: 'get',
            url: ''
        }).then((response) => {
            console.log()
            return response.data
        })
    }
}
export class SpecialtyService {
    static async getAll(){
        return axios({
            method: 'get',
            url: ''
        }).then((response) => {
            console.log()
            return response.data
        })
    }
    static async getById(){
        return axios({
            method: 'get',
            url: ''
        }).then((response) => {
            console.log()
            return response.data
        })
    }
}