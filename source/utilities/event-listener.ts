interface OnEventMethodInterface {
  on: (
    event: string,
    eventListener: EventListenerOrEventListenerObject,
    options?: boolean | undefined
  ) => void;
}
