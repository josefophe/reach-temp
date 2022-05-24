// Creator creates an NFT(This will be uploaded to IPFS) and lists that to the marketplace 
// A random second user can also come to the website and buy a random nft 
// As soon as the money is transfered to the owner, ownership will also be transfered 
// Royalty will go the cerator of the art peace
'reach 0.1';

export const main = Reach.App(() => {

    const NFT = Object({
        metadata:Bytes(59),
        price:UInt,
        creator:Address,
        owner:Address,
        royalty:UInt
    })

    const nftCreator = Participant('creator', {
        metadata:Bytes(59),
        price:UInt,
        royalty: UInt,
        mintNft: Fun([NFT], Null)
    })

    const nftBuyer = Participant('buyer', {
        nft: NFT,
        id:Bytes(20),
        buyNft: Fun([NFT, Bytes(20)], Null),
    })

    init() 

    nftCreator.only(() => {
        const nftMetadata = declassify(interact.metadata)
        const nftPrice = declassify(interact.price)
        const royalty = declassify(interact.royalty)
        const myNFT = {
           metadata: nftMetadata,
           price: nftPrice,
           creator: nftCreator,
           owner: nftCreator,
           royalty:royalty
        }
    })
    nftCreator.publish(myNFT)
    nftCreator.interact.mintNft(myNFT)
    
    commit()

    nftBuyer.only(() => {
        const nftToBuy = declassify(interact.nft) 
        const id = declassify(interact.id)
    })
    nftBuyer.publish(nftToBuy,id).pay(nftToBuy.price) 
    const p1 = nftToBuy.price/nftToBuy.royalty 
    const p2 = nftToBuy.price - nftToBuy.price/nftToBuy.royalty 
    transfer(p1).to(nftToBuy.creator)  
    transfer(p2).to(nftToBuy.owner)
    const modifiedNFT= {...nftToBuy, ["owner"]:nftBuyer}
    nftBuyer.interact.buyNft(modifiedNFT,id)
    commit()
    
})
