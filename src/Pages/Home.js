import React, { useState, useEffect } from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Identicon from 'react-identicons';
import Card from '../components/Card'
import LargeCard from '../components/LargeCard'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../storage'
import '../styles/home.css'

function Home() {

  const [selectedNFT, setSelectedNFT] = useState({
    img: 'https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500',
    name:"Noogler punk",
    owner:'0x00000000000000000000000000000',
    description:'lorem ipusm dissile dolorem portura nartro reveress',
    price:0.05
  })

  const [nfts, setNfts] = useState([])
  const [address, setAddress] = useState('')

  const connectWallet = async() => {
    const myAlgoConnect = new MyAlgoConnect();
    const accountsSharedByUser = await myAlgoConnect.connect();
    setAddress(accountsSharedByUser[0].address)
  }

  useEffect(() => {
    const getData = async() => {
      const querySnapshot = await getDocs(collection(db, "nfts"))
      let result = []
      querySnapshot.forEach((doc) => {
        const {id }= doc
        const data = doc.data()
        result.push({id, data})
      })
      setNfts(result)
    }

    getData()
  }, [])

  return (
    <div className='home'>
      <nav>
        <h1>TREE</h1>
        <section>
          {!address && <button onClick={connectWallet}>Connect wallet</button>}
          {address && <Identicon string={address} size={20}/>}
        </section>
        <a href="/mint">+</a>
      </nav>
      <div className='board'>
        <div className='board__left'>
          {nfts?.map(({id, data}) => <Card key={id} id={id} creator={data.creator} owner={data.owner} price={data.price} royalty={data.royalty} metadata={data.metadata}  selectNFt={setSelectedNFT} />)}
        </div>
        <div className='board__right'>
        <LargeCard img={selectedNFT.img} owner={selectedNFT.owner} price={selectedNFT.price} name ={selectedNFT.name} description={selectedNFT.description} />
        </div>
      </div>
    </div>
  )
}

export default Home