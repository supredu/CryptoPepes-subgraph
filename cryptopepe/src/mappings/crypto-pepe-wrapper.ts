import { BigInt } from "@graphprotocol/graph-ts";
import {
  BatchWrap as BatchWrapEvent,
  Transfer as TransferEvent,
  Unwrap as UnwrapEvent,
  Wrap as WrapEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent
} from "../../generated/CryptoPepeWrapper/CryptoPepeWrapper"
import {
  User,Pepe,PepeMetadata,Wrap,Unwrap,BatchWrap,Transfer
} from "../../generated/schema"
import { ADDRESS_ZERO,ADDRESS_WRAP } from './constants';
import {
  getOrCreateUser,
  updatePepeOwner,
  createTransfer,
  createBurn,
  createWrap,
  createUnwrap,
  createBatchWrap,
  burnPepe,
  setTokenuri,
  changeWrapState
} from "./helpers"



export function handleTransfer(event: TransferEvent): void {
  if (event.params.to == ADDRESS_ZERO) {
    // BURN
    let sender = getOrCreateUser(event.params.from);
    if (sender != null) {
      burnPepe(event.params.tokenId, event.block.number);
      createBurn(
        event.transaction.hash,
        event.params.tokenId,
        sender.id,
        event.block.number,
        event.block.timestamp
      );
    }
  } else {
    // TRANSFER

    let sender = getOrCreateUser(event.params.from);
    let receiver = getOrCreateUser(event.params.to);

    if (sender != null && receiver != null) {
      updatePepeOwner(event.params.tokenId, receiver.id, event.block.number);
      createTransfer(
        event.transaction.hash,
        event.params.tokenId,
        receiver.id,
        sender.id,
        event.block.number,
        event.block.timestamp
      );
    }
  }
}
export function handleWrap(event: WrapEvent): void {
  let sender = getOrCreateUser(event.params.sender)
  createWrap(
    event.transaction.hash,
    event.params.tokenId,
    sender.id,
    event.block.number,
    event.block.timestamp,
  );
  changeWrapState(event.params.tokenId,true);
  setTokenuri(event.params.tokenId);
}
export function handleBatchWrap(event: BatchWrapEvent): void {
  let sender = getOrCreateUser(event.params.sender)
  createBatchWrap(
    event.transaction.hash,
    event.params.tokenIds,
    sender.id,
    event.block.number,
    event.block.timestamp,
  );
  let tokenIDs = event.params.tokenIds;
  for (var i = 0; i < tokenIDs.length; i ++) {
    changeWrapState(tokenIDs[i],true);
    setTokenuri(tokenIDs[i]); 
}
}
export function handleUnwrap(event: UnwrapEvent): void {
  let sender = getOrCreateUser(event.params.from)
  let receiver = getOrCreateUser(event.params.to)
  createUnwrap(
    event.transaction.hash,
    event.params.tokenId,
    sender.id,
    receiver.id,
    event.block.number,
    event.block.timestamp,
  );
  changeWrapState(event.params.tokenId,false);
}
export function handleBatchMetadataUpdate(
  event: BatchMetadataUpdateEvent
): void {
  for (var i = 1; i <= 5496; i ++) {
    let bigintI = BigInt.fromU32(i)
    setTokenuri(bigintI); 
}
}
