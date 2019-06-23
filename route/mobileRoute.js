import mongoose from 'mongoose'
import fonoApi from 'fonoapi-nodejs'
import keys from '../config/keys'
import { mobileList } from '../helper/mobiles'

fonoapi.token = keys.fonoKey;
const Mobile = mongoose.model('mobiles')

function saveMobileData(queryString, data) {
    console.log(data, ' :data');
}

export default (app) => {
    app.post('/api/mobile/dummy', (req, res) => {

        mobileList.forEach(m => {
            fonoapi.getDevices(async function(queryString, data) {
                const mobile = new Mobile({
                    name: m.name,
                    brand: m.brand,
                    codeName: m.key,
                    availability: true,
                    technology: data.technology,
                    bands2g: data._2g_bands,
                    bands3g: data._3g_bands,
                    bands4g: data._4g_bands,
                    bookedBy: null,
                    bookedAt: Date.now()
                })
        
                try {
                    await mobile.save()
                    res.json({ result: 'done' })
                } catch (err) {
                    res.status(422).json(err)
                }
            }, m.name, m.brand);
        })
    })
}