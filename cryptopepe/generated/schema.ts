// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get username(): string | null {
    let value = this.get("username");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set username(value: string | null) {
    if (!value) {
      this.unset("username");
    } else {
      this.set("username", Value.fromString(<string>value));
    }
  }

  get holdings(): Array<string> | null {
    let value = this.get("holdings");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set holdings(value: Array<string> | null) {
    if (!value) {
      this.unset("holdings");
    } else {
      this.set("holdings", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Pepe extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pepe entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Pepe must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pepe", id.toString(), this);
    }
  }

  static load(id: string): Pepe | null {
    return changetype<Pepe | null>(store.get("Pepe", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get mother(): string {
    let value = this.get("mother");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set mother(value: string) {
    this.set("mother", Value.fromString(value));
  }

  get father(): string {
    let value = this.get("father");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set father(value: string) {
    this.set("father", Value.fromString(value));
  }

  get uri(): string {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get previousOwner(): string {
    let value = this.get("previousOwner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set previousOwner(value: string) {
    this.set("previousOwner", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get isWrapped(): string | null {
    let value = this.get("isWrapped");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set isWrapped(value: string | null) {
    if (!value) {
      this.unset("isWrapped");
    } else {
      this.set("isWrapped", Value.fromString(<string>value));
    }
  }

  get removed(): BigInt | null {
    let value = this.get("removed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set removed(value: BigInt | null) {
    if (!value) {
      this.unset("removed");
    } else {
      this.set("removed", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class PepeMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PepeMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PepeMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PepeMetadata", id.toString(), this);
    }
  }

  static load(id: string): PepeMetadata | null {
    return changetype<PepeMetadata | null>(store.get("PepeMetadata", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get externalURL(): string {
    let value = this.get("externalURL");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set externalURL(value: string) {
    this.set("externalURL", Value.fromString(value));
  }

  get animationURL(): string {
    let value = this.get("animationURL");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set animationURL(value: string) {
    this.set("animationURL", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get attributes(): Array<string> | null {
    let value = this.get("attributes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set attributes(value: Array<string> | null) {
    if (!value) {
      this.unset("attributes");
    } else {
      this.set("attributes", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Attribute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Attribute entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Attribute must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Attribute", id.toString(), this);
    }
  }

  static load(id: string): Attribute | null {
    return changetype<Attribute | null>(store.get("Attribute", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get traitType(): string {
    let value = this.get("traitType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set traitType(value: string) {
    this.set("traitType", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }
}

export class Mint extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Mint must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mint", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get receiver(): string {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set receiver(value: string) {
    this.set("receiver", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get pepe(): string {
    let value = this.get("pepe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pepe(value: string) {
    this.set("pepe", Value.fromString(value));
  }
}

export class Burn extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Burn must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Burn", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Burn | null {
    return changetype<Burn | null>(store.get("Burn", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get pepe(): string {
    let value = this.get("pepe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pepe(value: string) {
    this.set("pepe", Value.fromString(value));
  }
}

export class Transfer extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Transfer must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transfer", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get receiver(): string {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set receiver(value: string) {
    this.set("receiver", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get pepe(): string {
    let value = this.get("pepe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pepe(value: string) {
    this.set("pepe", Value.fromString(value));
  }
}

export class Wrap extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Wrap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Wrap must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Wrap", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Wrap | null {
    return changetype<Wrap | null>(store.get("Wrap", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get pepe(): string {
    let value = this.get("pepe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pepe(value: string) {
    this.set("pepe", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Unwrap extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Unwrap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Unwrap must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Unwrap", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Unwrap | null {
    return changetype<Unwrap | null>(store.get("Unwrap", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get receiver(): string {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set receiver(value: string) {
    this.set("receiver", Value.fromString(value));
  }

  get pepe(): string {
    let value = this.get("pepe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pepe(value: string) {
    this.set("pepe", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class BatchWrap extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BatchWrap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type BatchWrap must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BatchWrap", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): BatchWrap | null {
    return changetype<BatchWrap | null>(
      store.get("BatchWrap", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get pepes(): Array<string> {
    let value = this.get("pepes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set pepes(value: Array<string>) {
    this.set("pepes", Value.fromStringArray(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
