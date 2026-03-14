export async function GET() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
    });
    const data = await res.json();
    return Response.json({ 
      success: true, 
      count: data.length,
      first: data[0]?.title 
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message 
    });
  }
}