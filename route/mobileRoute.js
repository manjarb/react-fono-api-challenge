import mongoose from 'mongoose'
import fonoApi from 'fonoapi-nodejs'
import keys from '../config/keys'
import { mobileList } from '../helper/mobiles'

fonoApi.token = keys.fonoKey;
const Mobile = mongoose.model('mobiles')

export default (app) => {
    app.post('/api/mobile/dummy', (req, res) => {
        mobileList.forEach(m => {
            fonoApi.getDevices(async function(queryString, data) {
                const mobile = new Mobile({
                    name: m.name,
                    brand: m.brand,
                    codeName: m.key,
                    availability: true,
                    technology: data[0].technology,
                    bands2g: data[0]._2g_bands,
                    bands3g: data[0]._3g_bands,
                    bands4g: data[0]._4g_bands,
                    bookedBy: null,
                    bookedAt: null
                })
        
                try {
                    await mobile.save()
                } catch (err) {
                    res.status(422).json(err)
                }
            }, m.name, m.brand);
        })

        res.json({ result: 'done' })
    })

    app.get('/api/booking', async (req, res) => {
        const mobiles = await Mobile.find().sort({ created: 'desc' })

        try {
            res.json({ result: mobiles })
        } catch (err) {
            res.status(422).json(err)
        }
    })

    app.patch('/api/booking/:id/book', async (req, res) => {
        const bookingObject = req.body
        const booking = {
          ...bookingObject,
          availability: false,
          bookedAt: Date.now(),
          bookedBy: bookingObject.user.id,
        }
    
        try {
          await Mobile.findByIdAndUpdate(req.params.id, {
            $set: booking
          })
          const result = await Mobile.find().sort({ created: 'desc' })
          res.json({ result })
        } catch (err) {
          res.status(422).json(err)
        }
    })

    app.patch('/api/booking/:id/return', async (req, res) => {
        const bookingObject = req.body
        const booking = {
          ...bookingObject,
          availability: true,
          bookedAt: null,
          bookedBy: null,
        }
    
        try {
          await Mobile.findByIdAndUpdate(req.params.id, {
            $set: booking
          })
          const result = await Mobile.find().sort({ created: 'desc' })
          res.json({ result })
        } catch (err) {
          res.status(422).json(err)
        }
    })
}