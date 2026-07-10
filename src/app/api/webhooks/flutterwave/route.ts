import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Get the signature from headers
    const signature = req.headers.get('verif-hash');

    // 2. Verify the secret hash
    // The FLW_SECRET_HASH must match what you saved in your Flutterwave dashboard
    if (!signature || signature !== process.env.FLW_SECRET_HASH) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const payload = await req.json();

    // 3. Process the event
    // Flutterwave sends different event types; check the event type or transaction status
    const { event, data } = payload;

    if (event === 'charge.completed' && data.status === 'successful') {
      const transactionId = data.id;
      const txRef = data.tx_ref;
      const amount = data.amount;

      // 4. YOUR BUSINESS LOGIC HERE
      // Example: Update your database order status to 'paid'
      console.log(`Payment successful for order: ${txRef}`);
      
      // await db.order.update({
      //   where: { id: txRef },
      //   data: { status: 'PAID' }
      // });
    }

    // 5. Always acknowledge receipt within 200ms-500ms
    return NextResponse.json({ message: 'Webhook received' }, { status: 200 });
    
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}