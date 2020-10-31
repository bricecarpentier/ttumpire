export class MetaError<T> extends Error {
  public meta: T;

  constructor(msg: string, meta: T) {
    super(msg);
    this.meta = meta;
  }
}
