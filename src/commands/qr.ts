import qrcode from "qrcode-terminal";

export function handleQr(qr: string) {
  qrcode.generate(qr, { small: true });
}
