export default function handler(req,res){
    res.setPreviewData({})
    // res.end("Preview node enabled") // /api 
    res.redirect(req.query.redirect) //in the browser path add /api?redirect=/news
}