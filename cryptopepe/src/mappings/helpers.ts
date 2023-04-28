import {
    store,dataSource,Bytes,BigInt,Address,TypedMap,log
  } from '@graphprotocol/graph-ts';
import {
    CryptoPepeWrapper as WrapperContract
  } from "../../generated/CryptoPepeWrapper/CryptoPepeWrapper"
import {
    User,Pepe,PepeMetadata, Wrap, Unwrap, BatchWrap, Transfer,Mint,Burn
  } from '../../generated/schema';
import { ADDRESS_ZERO,ADDRESS_BASE,ADDRESS_WRAP } from './constants';
import { PepeMetadata as PepeMetadataTemplate } from "../../generated/templates";

export function getOrCreateUser(address: Bytes) : User {
    let user = User.load(address.toHexString());
    if(user == null) {
        user = new User(address.toHexString());
        user.save();
    }
    return user;
}

export function createPepe(tokenID: BigInt, motherID: BigInt, fatherID: BigInt, ownerID: string, blockNumber: BigInt): Pepe {
    let pepe = new Pepe(tokenID.toHexString());
    pepe.mother = motherID.toString();
    pepe.father = fatherID.toString();
    pepe.owner = ownerID;
    pepe.previousOwner = ADDRESS_ZERO.toHexString();
    pepe.tokenId = tokenID;
    pepe.save();
    return pepe;
}
export function getPepe(tokenID: BigInt) : Pepe{
    let pepe = Pepe.load(tokenID.toHexString());
    if (pepe == null){
        pepe = new Pepe(tokenID.toHexString());
    }
    return pepe;
}
export function updatePepeOwner(tokenID: BigInt, ownerID:string, blockNumber: BigInt) : void {
    let pepe = Pepe.load(tokenID.toHexString());
    if(pepe != null){
        let oldOwner = pepe.owner;
        pepe.previousOwner = oldOwner;
        pepe.owner = ownerID;
        pepe.save();
    }
}

export function burnPepe(tokenID: BigInt, blockNumber: BigInt) : void {
    let pepe = Pepe.load(tokenID.toHexString());
    if(pepe != null){
        let oldOwner = pepe.owner;
        pepe.previousOwner = oldOwner;
        pepe.owner = ADDRESS_ZERO.toHexString();
        pepe.removed = blockNumber;
        pepe.save();
    }
}
export function changeWrapState(tokenID: BigInt,isWrap: bool) : void{
    let pepe = getPepe(tokenID)
    if(isWrap == true){
        pepe.isWrapped = "Wrapped"
    }
    else{
        pepe.isWrapped = "UnWrapped"
    }
}
export function createWrap(txHash: Bytes, tokenID: BigInt, senderID: string,blockNumber: BigInt, timestamp: BigInt) : void {
    let wrap = new Wrap(txHash);
    wrap.sender = senderID;
    wrap.pepe = tokenID.toHexString();
    wrap.timestamp = timestamp;
    wrap.blockNumber = blockNumber;
    wrap.save();
}
export function createUnwrap(txHash: Bytes, tokenID: BigInt, senderID: string, receiverID: string, blockNumber: BigInt, timestamp: BigInt) : void {
    let unwrap = new Unwrap(txHash);
    unwrap.sender = senderID;
    unwrap.receiver = receiverID;
    unwrap.pepe = tokenID.toHexString();
    unwrap.timestamp = timestamp;
    unwrap.blockNumber = blockNumber;
    unwrap.save();
}
export function createBatchWrap(txHash: Bytes, tokenIDs: BigInt[], senderID: string, blockNumber: BigInt, timestamp: BigInt) : void {
    let batchWrap = new BatchWrap(txHash);
    batchWrap.sender = senderID;
    for (var i = 0; i < tokenIDs.length; i ++) {
        batchWrap.pepes.push(tokenIDs[i].toHexString()); 
    }
    batchWrap.timestamp = timestamp;
    batchWrap.blockNumber = blockNumber;
    batchWrap.save();
}
export function createMint(txHash: Bytes, tokenID: BigInt, receiverID: string, blockNumber: BigInt, timestamp: BigInt) : void {
    let mint = new Mint(txHash);
    mint.pepe = tokenID.toHexString();
    mint.timestamp = timestamp;
    mint.blockNumber = blockNumber;
    mint.receiver = receiverID;
    mint.save();
}


export function createTransfer(txHash: Bytes, tokenID: BigInt, receiverID: string, senderID: string, blockNumber: BigInt, timestamp: BigInt) : void {
    let transfer = new Transfer(txHash);
    transfer.pepe = tokenID.toHexString();
    transfer.timestamp = timestamp;
    transfer.blockNumber = blockNumber;
    transfer.receiver = receiverID;
    transfer.sender = senderID;
    transfer.save();
}


export function createBurn(txHash: Bytes, tokenID: BigInt, senderID: string, blockNumber: BigInt, timestamp: BigInt) : void {
    let burn = new Burn(txHash);
    burn.pepe = tokenID.toHexString();
    burn.timestamp = timestamp;
    burn.blockNumber = blockNumber;
    burn.sender = senderID;
    burn.save(); 
}
export function setTokenuri(tokenID: BigInt) : void{
    let wrapContract = WrapperContract.bind(ADDRESS_WRAP);
    let pepe = getPepe(tokenID);
    let uriResponse = wrapContract.try_tokenURI(tokenID);
    let uriIPFS = "";
    if(!uriResponse.reverted) {
        pepe.uri = uriResponse.value;
        uriIPFS = uriResponse.value.replace("ipfs://", "");
        pepe.metadata = uriIPFS;
    }
    pepe.save()
    PepeMetadataTemplate.create(uriIPFS);
}

  