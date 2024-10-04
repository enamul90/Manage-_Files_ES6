import {UploadSingleFileService,
    UploadMultipleFileService,
    ReadFileService,
    SingleDeleteService,
    MultipleDeleteService
} from "../Services/UploadFileService.js";


export const UploadSingleFile = async (req, res) => {
    let result = await UploadSingleFileService (req)
    return res.json(result)
}

export const UploadMultipleFile = async (req, res) => {
    let result = await UploadMultipleFileService (req)
    return res.json(result)
}


export const ReadFile = async (req, res) => {
    let result = await ReadFileService (req, res)
    return res.sendFile(result)
}



export const SingleDelete = async (req,res) => {
    let result = await SingleDeleteService (req,res)
    return res.json(result)
}



export const MultipleDelete = async (req,res) => {
    let result = await MultipleDeleteService (req)
    return res.json(result)
}