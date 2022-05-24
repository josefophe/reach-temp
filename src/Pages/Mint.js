import React, { useState, useEffect } from 'react'
import { Web3Storage } from 'web3.storage'
import { useNavigate } from 'react-router-dom'
import * as backend from '../rsh/build/index.main.mjs'
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import { collection, addDoc} from 'firebase/firestore'
import { db }from '../storage'
//import { ctcInfoStr } from '../utils'
import '../styles/mint.css'


function Mint() {  

  const reach = loadStdlib(process.env);
  reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect 
  }))

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState()
  const [royalty, setRoyalty] = useState(0)
  const [thumbnail, setThumbnail] = useState('')
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  const uploadImage = (e) => {
    e.preventDefault()
    const url = URL.createObjectURL(e.target.files[0])
    setThumbnail(url)
    setImg(e.target.files)
  }
    
  const submitData = async(e) => {
    e.preventDefault()

    if(!name || !description || !price || !royalty || img.length == 0) {
      console.log('Not enough data')
      return
    }
    setLoad(true)
    try{
      const storageKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGIwRjYxY0JiQmJBNzZGNzdhOWNkNzY0MzY3NjY1QWNEZmYyYjQwRUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDQzMDYwMjE5MjYsIm5hbWUiOiJ0ZXN0MSJ9.U-S4rp9VB6Wrj_vWDsKTWuFJUu9y3jPXollCp2UCWN0'
      const client = new Web3Storage({ token: storageKey })

      const imgCID = await client.put([new File([new Blob([img[0]])], `${name}`)])
      const imgLink = `https://${imgCID}.ipfs.dweb.link/${name}`
      const nftData = new Blob(
        [JSON.stringify({
          name,
          description,
          imgLink,
          })], { type:'application/json' }
      ) 
      const nftCID = await client.put([new File([nftData],'metadata' )])
      const account = await reach.getDefaultAccount()
      const ctc = account.contract(backend)
      
      backend.creator(ctc, {
        metadata : nftCID,
        price : price,
        royalty : royalty,
        mintNft : async(nft) => {
          nft.price = Number(nft.price)
          nft.royalty = Number(nft.royalty)
          await addDoc(collection(db, "nfts"), nft)
        }
      })
      const ctcInfoSt = await ctc.getInfo()
      window.alert(Number(ctcInfoSt))
      navigate('/')

    } catch(e) {
      setLoad(false)
      console.log(e)
    }

  }

  return (
    <div className='mint'>
      <form onSubmit={submitData}>
        <input type="text" onChange={e => setName(e.target.value)}  placeholder='Enter name...'/>
        <input type="text" onChange={e => setDescription(e.target.value)} placeholder='Enter description...'/>
        <input type="number" step={0.1} onChange={e => setPrice(e.target.value)} placeholder='Enter price...'/>
        <input type="number" step={1} onChange={e => setRoyalty(e.target.value)} placeholder='Enter percentage'/>
        <input type="file" onChange={uploadImage} />
        {thumbnail && <img src={thumbnail} alt="nft" />}
        <>{load ? <button>Loading...</button> : <button type='submit'>Mint </button> }</> 
      </form>
    </div>
  )
}

export default Mint