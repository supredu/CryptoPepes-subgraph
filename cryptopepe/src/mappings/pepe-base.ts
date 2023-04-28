import {
  PepeBorn as PepeBornEvent,
  Transfer as TransferEvent,
  UserNamed as UserNamedEvent,
  PepeBase as BaseContract
} from "../../generated/PepeBase/PepeBase"
import {
    User,
    Pepe,
    Transfer,
    Mint
} from "../../generated/schema"

import {
  getOrCreateUser,
  updatePepeOwner,
  createTransfer,
  createMint,
  createPepe
} from "./helpers"
import { ADDRESS_BASE} from './constants';
export function handlePepeBorn(event: PepeBornEvent): void {
    let baseContract = BaseContract.bind(ADDRESS_BASE)
    let owner = baseContract.ownerOf(event.params.pepeId)
    let pepe = createPepe(
      event.params.pepeId,
      event.params.mother,
      event.params.father,
      owner.toHexString(),
      event.block.number
    );
    createMint(
      event.transaction.hash,
      event.params.pepeId,
      pepe.owner,
      event.block.number,
      event.block.timestamp
    );
  }


export function handleTransfer(event: TransferEvent): void {
    let sender = getOrCreateUser(event.params._from);
    let receiver = getOrCreateUser(event.params._to);
    if (sender != null && receiver != null) {
      updatePepeOwner(event.params._tokenId, receiver.id, event.block.number);
      createTransfer(
        event.transaction.hash,
        event.params._tokenId,
        receiver.id,
        sender.id,
        event.block.number,
        event.block.timestamp
      );
    }
}

export function handleUserNamed(event: UserNamedEvent): void {
let user = getOrCreateUser(event.params.user)
  user.username=event.params.username.toString()
  user.save()
}
