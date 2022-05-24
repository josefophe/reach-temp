import { useState, useEffect } from 'react'
import * as backend from '../rsh/build/index.main.mjs'
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import Identicon from 'react-identicons';
import { Web3Storage } from 'web3.storage'
import axios from 'axios'
import { doc, updateDoc } from 'firebase/firestore'
import { ctcInfoStr } from '../utils'
import { db } from '../storage';
import '../styles/Card.css'

function Card({selectNFt, id, creator, metadata, price, owner, royalty}) {

    const reach = loadStdlib(process.env)
    reach.setWalletFallback(reach.walletFallback({
        providerEnv: 'MainNet', MyAlgoConnect 
    }))

    const [nftMetadata, setMetadata] = useState()
    const [load, setLoad] = useState(false)


    const storageKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGIwRjYxY0JiQmJBNzZGNzdhOWNkNzY0MzY3NjY1QWNEZmYyYjQwRUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDQzMDYwMjE5MjYsIm5hbWUiOiJ0ZXN0MSJ9.U-S4rp9VB6Wrj_vWDsKTWuFJUu9y3jPXollCp2UCWN0'
    const client = new Web3Storage({ token: storageKey })

    
    const getMetadata = async()=> {
        const fileArray = await client.get(metadata)
        const [file1] = await fileArray.files()
        const {data} = await axios.get(`https://ipfs.io/ipfs/${file1.cid}`)
        setMetadata(data)
    }

    useEffect(() => {
        getMetadata()
    },[])

    
    const buyNFT = async() => {
        const account = await reach.getDefaultAccount()
        setLoad(true)
        const ctc = account.contract(backend, ctcInfoStr)
        backend.buyer(ctc, {
            nft : {
                creator,
                metadata,
                owner,
                price: reach.parseCurrency(price),
                royalty
            },
            id,
            buyNft:async(nft, id) => {
                nft.price = Number(nft.price)
                nft.royalty = Number(nft.royalty)
                const nftRef = doc(db, "nfts", id)
                await updateDoc(nftRef, nft)
                window.location.reload()
            }
        })
    }

    const getNFT = () => {
        selectNFt({
            img:nftMetadata?.imgLink,
            name:nftMetadata?.name,
            owner,
            description: nftMetadata?.description,
            price
        })
    }

    return (
        <div className='card' >
            <img src={nftMetadata?.imgLink} alt="" onMouseOver={getNFT}/>
            <h2>{nftMetadata?.name}</h2>
            <p className="price">{price} ALGO</p>
            <button onClick={buyNFT} disabled={load}>{!load?'Buy':'Loading...'}</button>
            <p className="ownerAddress"><span>Owner:{owner}</span></p>
            <span><Identicon string={owner} size={20}/></span>
        </div>
    )
}

export default Card