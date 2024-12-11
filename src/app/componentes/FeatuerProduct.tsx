import Image from "next/image";

const FeaturedProducts = () => {
    const products = [
      { id: 1, name: 'Library Stool', price: '$20', image: '/image.image.jpeg', tag: 'New' },
      { id: 2, name: 'Library Stool Chair', price: '$20', image: '/Image (1).png', tag: 'Sale' },
      { id: 3, name: 'Library Stool Chair', price: '$20', image: '/image 123.jpeg', tag: null },
      { id: 4, name: 'Library Stool Chair', price: '$20', image: '/naina.png', tag: null },
    ];
  
    return (
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md ">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={150}
                  className="w-full h-[312px] object-cover"
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 bg-${
                      product.tag === 'New' ? 'green' : 'orange'
                    }-500 text-white text-xs font-bold px-2 py-1 rounded`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;
  