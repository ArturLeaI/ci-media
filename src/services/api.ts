export async function sendPaymentToken(cardHash: string) {
  return fetch('/api/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ card_hash: cardHash }),
  });
}
