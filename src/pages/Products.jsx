
import { useEffect, useState } from "react";

const limit = 10;

const Products = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const skip = (page - 1) * limit;
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        setProducts(data.products);
        setTotal(data.total);
      } catch (error) {
        console.error("Could not fetch products:", error);
        setError("Could not load products. Please try again.");
        setProducts([]);
      }
      finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="relative mt-12 overflow-x-auto max-w-6xl mx-auto">

      <div className="rounded-lg border border-gray-200 shadow-sm">

        <table className="w-full text-sm text-left">

          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 font-medium">
                Product Name
              </th>

              <th className="px-6 py-3 font-medium">
                Category
              </th>

              <th className="px-6 py-3 font-medium">
                Price
              </th>

              <th className="px-6 py-3 font-medium">
                Stock
              </th>

              <th className="px-6 py-3 font-medium">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td className="px-6 py-4 text-center" colSpan={5}>
                  Loading products...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td className="px-6 py-4 text-center text-red-600" colSpan={5}>
                  {error}
                </td>
              </tr>
            ) : products.length > 0 ? products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {product.title}
                </td>

                <td className="px-6 py-4 capitalize">
                  {product.category}
                </td>

                <td className="px-6 py-4">
                  ${product.price}
                </td>

                <td className="px-6 py-4">
                  {product.stock}
                </td>

                <td className="px-6 py-4">
                  ⭐ {product.rating}
                </td>
              </tr>
            )) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan={5}>
                  No products found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
      <div className="flex justify-center gap-5 items-center mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-40 cursor-pointer"
        >
          Prev
        </button>

        <span className="font-semibold text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-40 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
